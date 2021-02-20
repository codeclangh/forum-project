import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";

import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Head from "next/head";
import styles from "../styles/login.module.css";
import Link from "next/link";
import Side from "../components/Side";
import axios from "axios";
import { setAccessToken } from "../token";

const login = () => {
  const { replace } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post("/api/login", {
        email,
        password,
        remember
      });

      if (data.refreshToken) {
        sessionStorage.setItem("token", data.refreshToken);
      }

      setAccessToken(data.accessToken);

      replace("/");
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className={styles.body}>
        {" "}
        <Head>
          <title>Log In</title>
        </Head>
        <div className={styles.wrapper}>
          <Row className={styles.row}>
            <Col md={5}>
              <Side>
                <Container>
                  <Form
                    onSubmit={handleSubmit}
                    className={`${styles.form} ${styles.mobileOnly}`}
                  >
                    <p className={styles.title}>Sign In</p>
                    <Form.Group controlId="email1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password1">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Row>
                      <Col>
                        {" "}
                        <Button
                          className={styles.btnMain}
                          type="submit"
                          variant="primary"
                          disabled={loading}
                        >
                          Sign In
                        </Button>
                      </Col>
                      <Col className={styles.noAccount}>
                        Don't have an account? <br />{" "}
                        <span>
                          <Link href="/register">Create One</Link>
                        </span>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </Side>
            </Col>
            <Col md={7}>
              <Container>
                <div
                  className={`${styles.formContainer} ${styles.desktopOnly}`}
                >
                  <Form
                    onSubmit={handleSubmit}
                    className={`${styles.form} ${styles.desktopOnly}`}
                  >
                    <h5 className={styles.title}>Sign In</h5>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Row>
                      <Col>
                        {" "}
                        <Button
                          className={styles.btnMain}
                          type="submit"
                          variant="primary"
                        >
                          Sign In
                        </Button>
                      </Col>
                      <Col className={styles.noAccount}>
                        Don't have an account? <br />{" "}
                        <span>
                          <Link href="/register">Create One</Link>
                        </span>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default login;
