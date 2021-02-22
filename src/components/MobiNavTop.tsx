import { Container, Navbar } from "react-bootstrap";
import styles from "../styles/nav.module.css";
import Link from "next/link";

const MobiNavTop = () => {
  return (
    <>
      <div>
        <Container>
          <div className={styles.mobiNavTop}>
            <div>
              <i className={`${styles.icon}bi bi-list`}></i>
            </div>
            <Navbar expand="lg">
              <Link href="/">
                <a>
                  <Navbar.Brand>uForum</Navbar.Brand>
                </a>
              </Link>
            </Navbar>
            <div>
              <i className={`${styles.icon} bi bi-gear`}></i>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MobiNavTop;
