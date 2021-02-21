import { Container } from "react-bootstrap";
import styles from "../styles/nav.module.css";
import Link from "./Link";
import Header from "../components/Nav-one";
export const links = [
  {
    icon: "bi bi-house",
    title: "Home",
  },
  {
    icon: "bi bi-search",
    title: "Explore",
  },
  {
    icon: "bi bi-bell",
    title: "Notifications",
  },
  {
    icon: "bi bi-chat-left",
    title: "Messages",
  },
  {
    icon: "bi bi-bookmarks",
    title: "Bookmarks",
  },
];

const Nav = () => {
  return (
    <>
      <div className="nav-wrapper">
        <Header />
        <Container>
          <div className={styles.main}>
            {links.map((link) => (
              <Link link={link} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Nav;
