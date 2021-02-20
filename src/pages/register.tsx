import React, { useState } from "react";
import Layout from "../components/Layout";

import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Head from "next/head";
import styles from "../styles/register.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Side from "../components/Side";
import axios from "axios";
import { setAccessToken } from "../token";
const Register = () => {
  const { replace } = useRouter();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUserName] = useState("");
  const [remember, setRemember] = useState(false);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (confirmPassword === password) {
      try {
        setLoading(true);
        const { data } = await axios.post("/api/register", {
          email,
          gender,
          username,
          name,
          password,
          remember,
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
    } else {
      setMessage("Passwords don't Match");
    }
  };

  return (
    <Layout>
      <main className={styles.body}>
        <Head>
          <title>Create Account</title>
        </Head>
        <div className={styles.wrapper}>
          <Row className={styles.row}>
            <Col md={5}>
              <Side
                children={
                  <Container>
                    <Form
                      onSubmit={handleSubmit}
                      className={`${styles.form} ${styles.mobileOnly}`}
                    >
                      <p className={styles.title}>Create Account</p>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="text"
                              value={username}
                              onChange={(e) => setUserName(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="email1">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="gender1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                              type="text"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group controlId="password1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId="confirmPassword1">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                      </Form.Group>

                      <Row>
                        <Col md={5}>
                          <Button
                            className={styles.btnMain}
                            type="submit"
                            variant="primary"
                          >
                            Create Account
                          </Button>
                        </Col>
                        <Col md={7} className={styles.noAccount}>
                          Have an account already? <br />{" "}
                          <span>
                            <Link href="/login">Log in</Link>
                          </span>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                }
              />
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
                    <p className={styles.title}>Create Account</p>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="name">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="username1">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="email">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="gender">
                          <Form.Label>Gender</Form.Label>
                          <Form.Control
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Row>
                      <Col md={5}>
                        <Button
                          className={styles.btnMain}
                          type="submit"
                          variant="primary"
                        >
                          Create Account
                        </Button>
                      </Col>
                      <Col md={7} className={styles.noAccount}>
                        Have an account already? <br />{" "}
                        <span>
                          <Link href="/login">Log in</Link>
                        </span>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
      </main>
    </Layout>
  );
};

export default Register;
