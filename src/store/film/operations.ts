import axios from "axios";
import { Dispatch } from "react";
import { RouteComponentProps } from "react-router-dom";
import { RoutesFilm } from "../../pages/Home/routes/homeRoutesConfig";
import { RoutesHome } from "../../routes/routesConfig";
import {
  filmAction,
  filmActionError,
  filmActionID,
  filmActionSuccess,
} from "./action";
import { FilmAction } from "./interface";

interface IData {
  Error: string;
  Response: string;
  Search: [];
}

const { REACT_APP_FILMS, REACT_APP_API_KEY } = process.env;

export const fetchOperationFilms = (
  search: string = "",
  history?: RouteComponentProps["history"]
) => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch(filmAction());
      if (search) {
        const data: IData = await axios
          .get(`${REACT_APP_FILMS}`, {
            params: {
              apikey: REACT_APP_API_KEY,
              s: search,
            },
          })
          .then(({ data }) => data);
        if (data.Response === "True") {
          console.log(data.Search);
          dispatch(filmActionSuccess(data.Search));
          history?.push(RoutesFilm);
        }
        if (data.Response === "False") {
          dispatch(filmActionError(data.Error));
          history?.push(RoutesHome);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchOperationFilmID = (id: string) => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch(filmAction());
      const data = await axios
        .get(`${REACT_APP_FILMS}`, {
          params: {
            apikey: REACT_APP_API_KEY,
            i: id,
          },
        })
        .then(({ data }) => data);

      dispatch(filmActionID(data));
    } catch (e) {
      console.log(e);
    }
  };
};
