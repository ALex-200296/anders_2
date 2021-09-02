import { FilmAction, IFilmInitialState } from "./interface";
import { FilmTypes } from "./types";

const initialState: IFilmInitialState = {
  data: [],
  error: "",
  loading: false,
  search: "",
};

export const filmReducer = (state = initialState, action: FilmAction) => {
  switch (action.type) {
    case FilmTypes.FETCH_FILMS:
      return { ...state, loading: true };
    case FilmTypes.FETCH_FILMS_ERROR:
      return { ...state, loading: false, error: action.error };
    case FilmTypes.FETCH_FILMS_SUCCESS:
      return { ...state, loading: false, data: action.data };
    default:
      return state;
  }
};
