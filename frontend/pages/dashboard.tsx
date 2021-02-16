import Nav from "../components/Nav";
import useUser from "../hooks/useUser";
import styles from "../styles/dashboard.module.css";

const dashboard = () => {
  const { user, isAuthenticated, authenticating } = useUser();
  return (
    <>
      {isAuthenticated && !authenticating && (
        <div>
          {/* Nav */}
          <h1>Welcome {user?.name}</h1>
          <div className={styles.wrapper}>
            <div className={styles.menu}>
              <Nav />
            </div>
            <div className={styles.feed}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              odit quibusdam qui consectetur eaque, ad, facere quidem repellat,
              rem repellendus in. Quae, molestiae dicta nihil earum aliquid
              dolorem voluptatem repudiandae delectus quis aperiam cumque, aut
              voluptas natus provident molestias, maxime corrupti quisquam
              explicabo amet commodi. Perferendis nesciunt nulla officia neque!
              Ut animi aut, explicabo nam assumenda accusantium repellat
              recusandae numquam sint qui temporibus facere hic vero debitis
              fugiat quis quo, dolorem eveniet suscipit nobis nisi quibusdam
              eligendi voluptas nulla. Mollitia.
            </div>
            <div className={styles.side}>a</div>
          </div>
        </div>
      )}
    </>
  );
};

export default dashboard;
