import React, { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import {
  Row,
  Col,
  Container,
  Image,
  Navbar,
  Form,
  Button
} from "react-bootstrap";

import styles from "../styles/forms.module.css";

const Side: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles.intro}>
        <Link href="/">
          <a>
            <Navbar.Brand>
              {/* <Image className="logo" src="/assets/logo.png" alt="" rounded /> */}
              uForum
            </Navbar.Brand>
          </a>
        </Link>
        <div className={styles.introWrapper}>
          <div>
            <p className={styles.introText}>Join conversations around you.</p>
            <p className={styles.started}>Let's get you started</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Side;
