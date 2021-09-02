import { IFilmAction, IFilmActionError, IFilmActionSuccess } from "./interface";
import { FilmTypes } from "./types";

export const filmAction = (): IFilmAction => ({
  type: FilmTypes.FETCH_FILMS,
});

export const filmActionError = (error: string): IFilmActionError => ({
  type: FilmTypes.FETCH_FILMS_ERROR,
  error: error,
});

export const filmActionSuccess = (data: []): IFilmActionSuccess => ({
  type: FilmTypes.FETCH_FILMS_SUCCESS,
  data: data,
});
