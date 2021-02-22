import { Container } from "react-bootstrap";
import styles from "../styles/nav.module.css";
import Link from "./Link";

export const links = [
  {
    icon: "bi bi-house",
  },
  {
    icon: "bi bi-search",
  },
  {
    icon: "bi bi-bell",
  },
  {
    icon: "bi bi-chat-left",
  },
];

const MobiNav = () => {
  return (
    <>
      <div className={styles.mobinav}>
        <Container>
          <div className={styles.mobinav}>
            {links.map((link) => (
              <Link link={link} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default MobiNav;
