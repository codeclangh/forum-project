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
            <div className={styles.menu}>a</div>
            <div className={styles.feed}>a</div>
            <div className={styles.side}>a</div>
          </div>
        </div>
      )}
    </>
  );
};

export default dashboard;
