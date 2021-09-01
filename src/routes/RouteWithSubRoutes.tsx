import React from "react";
import { Route } from "react-router-dom";
import { IRoutes } from "./IRoutes";

const RouteWithSubRoutes = (route: IRoutes) => {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default RouteWithSubRoutes;
