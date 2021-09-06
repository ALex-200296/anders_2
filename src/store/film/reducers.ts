import { FilmAction, IFilmInitialState } from "./interface";
import { FilmTypes } from "./types";

export const initialState: IFilmInitialState = {
  data: [],
  error: "",
  loading: false,
  search: "",
  item: {},
};

export const filmReducer = (state = initialState, action: FilmAction) => {
  switch (action.type) {
    case FilmTypes.FETCH_FILMS:
      return { ...state, loading: true };
    case FilmTypes.FETCH_FILMS_ERROR:
      return { ...state, loading: false, error: action.error };
    case FilmTypes.FETCH_FILMS_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case FilmTypes.FETCH_FILM_ID:
      return { ...state, item: action.item, loading: false };
    default:
      return state;
  }
};
