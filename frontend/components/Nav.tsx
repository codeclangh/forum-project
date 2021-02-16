import { Container } from "react-bootstrap";
import styles from "../styles/nav.module.css";
import Link from "./Link";
const Nav = () => {
  const links = [
    {
      icon: "",
      title: "Home",
    },
    {
      icon: "",
      title: "Explore",
    },
    {
      icon: "",
      title: "Trending",
    },
    {
      icon: "",
      title: "Department",
    },
    {
      icon: "",
      title: "Bookmarks",
    },
  ];
  return (
    <div>
      <Container>
        <h3>uForum</h3>

        <div className={styles.main}>
          {links.map((link) => (
            <Link link={link} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Nav;
