import Nav from "../components/Nav";
import useUser from "../hooks/useUser";
import styles from "../styles/dashboard.module.css";
import posts from "../data/posts";

import Post from "../components/Post";
import Header from "@/components/Nav-one";
import Head from "next/head";

const dashboard = () => {
  const { user, isAuthenticated, authenticating } = useUser();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {isAuthenticated && !authenticating && (
        <div>
          <div className={styles.wrapper}>
            <div className={styles.menu}>
              <Nav />
            </div>
            <div className={styles.feed}>
              {posts.map((post) => (
                <Post post={post} />
              ))}
            </div>
            <div className={styles.side}>a</div>
          </div>
        </div>
      )}
    </>
  );
};

export default dashboard;
