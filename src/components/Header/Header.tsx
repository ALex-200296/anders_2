import React from "react";
import styles from "./header.module.scss";
import Nav from "../Nav/Nav";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
};

export default Header;
