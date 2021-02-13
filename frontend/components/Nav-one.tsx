import { Image, Container, Navbar } from "react-bootstrap";

import Link from "next/link";
const Header = () => {
  return (
    <header>
      <Navbar expand="lg" fixed="top">
        <Link href="/">
          <a>
            <Navbar.Brand>
              {/* <Image className="logo" src="/assets/logo.png" alt="" rounded /> */}
              uForum
            </Navbar.Brand>
          </a>
        </Link>
      </Navbar>
    </header>
  );
};

export default Header;
