import React from "react";

import "./App.scss";
import { Switch } from "react-router-dom";
import routes from "./routes/routes";
import RouteWithSubRoutes from "./routes/RouteWithSubRoutes";
import { IRoutes } from "./routes/IRoutes";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <main>
        <Switch>
          {routes.map((route: IRoutes, idx: number) => (
            <RouteWithSubRoutes key={idx} {...route} />
          ))}
        </Switch>
      </main>
    </Container>
  );
};

export default App;
