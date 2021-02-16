import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Jumbotron, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import useUser from "../hooks/useUser";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { replace } = useRouter();
  const { user, authenticating, isAuthenticated } = useUser();

  if (authenticating) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Welcome to uForum</title>
      </Head>
      <Layout>
        <div className={styles.wrapper}>
          <main className={styles.main}>
            {!isAuthenticated ? (
              <div>
                <h1>
                  Welcome to <a>uForum</a>
                </h1>

                <div>
                  <Link href="/login">
                    <Button className="mr-2 btn-lg" variant="light">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="mr-2 btn-lg" variant="dark">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              replace("/dashboard")
            )}
          </main>
        </div>
      </Layout>
    </div>
  );
}
