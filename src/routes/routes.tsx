import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import homeRoutes from "../pages/Home/routes/homeRoutes";
import { IRoutes } from "./IRoutes";
import { RoutesAbout, RoutesHome } from "./routesConfig";

const routes: IRoutes[] = [
  {
    path: RoutesAbout,
    component: About,
    exact: true,
  },
  {
    path: RoutesHome,
    component: Home,
    routes: homeRoutes,
  },
];

export default routes;
