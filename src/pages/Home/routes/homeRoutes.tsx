import EmptySection from "../../../components/EmptySection/EmptySection";
import FilmInfoSection from "../../../components/FilmInfoSection/FilmInfoSection";
import FilmSection from "../../../components/FilmsSection/FilmSection";
import { IRoutes } from "../../../routes/IRoutes";
import { RoutesHome } from "../../../routes/routesConfig";
import { RoutesFilm, RoutesFilmInfo } from "./homeRoutesConfig";

const homeRoutes: IRoutes[] = [
  {
    path: RoutesHome,
    component: EmptySection,
    exact: true,
  },
  {
    path: RoutesFilm,
    component: FilmSection,
    exact: true,
  },
  {
    path: RoutesFilmInfo,
    component: FilmInfoSection,
    exact: true,
  },
];

export default homeRoutes;
