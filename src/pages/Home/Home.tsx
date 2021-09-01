import React from "react";
import { Switch } from "react-router-dom";
import Search from "../../components/Search/Search";
import { IRoutes } from "../../routes/IRoutes";
import RouteWithSubRoutes from "../../routes/RouteWithSubRoutes";
import styles from "./home.module.scss";

interface IHome {
  routes: IRoutes[];
}

const Home: React.FC<IHome> = ({ routes }) => {
  return (
    <section className={styles.home}>
      <Search />
      <Switch>
        {routes.map((route: IRoutes, idx: number) => (
          <RouteWithSubRoutes key={idx} {...route} />
        ))}
      </Switch>
    </section>
  );
};

export default Home;
