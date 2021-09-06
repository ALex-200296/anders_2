import { FilmTypes } from "./types";

export interface IFilmList {
  Poster: string;
  Title: string;
  Type?: string;
  Year: string;
  imdbID: string;
}

export interface IFilmItem {
  Actors?: string;
  Awards?: string;
  BoxOffice?: string;
  Country?: string;
  Director?: string;
  Language?: string;
  Plot?: string;
  Poster?: string;
  Production?: string;
  Released?: string;
  Title?: string;
  Writer?: string;
  Year?: string;
  imdbID?: string;
  imdbRating?: string;
  imdbVotes?: string;
}

export interface IFilmInitialState {
  search: string;
  data: IFilmList[];
  error: string;
  loading: boolean;
  item: IFilmItem;
}

export interface IFilmAction {
  type: FilmTypes.FETCH_FILMS;
}

export interface IFilmActionError {
  type: FilmTypes.FETCH_FILMS_ERROR;
  error: string;
}

export interface IFilmActionSuccess {
  type: FilmTypes.FETCH_FILMS_SUCCESS;
  data: [];
}

export interface IFilmActionID {
  type: FilmTypes.FETCH_FILM_ID;
  item: {};
}

export type FilmAction =
  | IFilmAction
  | IFilmActionError
  | IFilmActionSuccess
  | IFilmActionID
  | any;
