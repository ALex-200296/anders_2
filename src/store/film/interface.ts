import { FilmTypes } from "./types";

export interface IFilmList {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IFilmInitialState {
  search: string;
  data: IFilmList[];
  error: string;
  loading: boolean;
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

export type FilmAction = IFilmAction | IFilmActionError | IFilmActionSuccess;
