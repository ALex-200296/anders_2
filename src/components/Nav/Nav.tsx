import React from "react";
import { RoutesAbout, RoutesHome } from "../../routes/routesConfig";
import { INavLink } from "./INavLink";
import styles from "./nav.module.scss";
import NavItem from "./NavItem/NavItem";

const listLink: INavLink[] = [
  {
    to: RoutesHome,
    name: "HOME",
  },
  {
    to: RoutesAbout,
    name: "ABOUT",
  },
];

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {listLink.map((route: INavLink, idx: number) => (
          <NavItem key={idx} {...route} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
