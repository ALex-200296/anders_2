import React from "react";
import { Link } from "react-router-dom";
import { INavLink } from "../INavLink";
import styles from "./navItem.module.scss";

const NavItem: React.FC<INavLink> = ({ to, name }) => {
  return (
    <li className={styles.navItem}>
      <Link className={styles.navLink} to={to}>
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
