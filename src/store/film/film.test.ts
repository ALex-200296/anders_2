import {
  filmAction,
  filmActionError,
  filmActionID,
  filmActionSuccess,
} from "./action";
import { IFilmInitialState, IFilmList } from "./interface";
import { filmReducer, initialState } from "./reducers";

const loadingState: IFilmInitialState = {
  data: [],
  error: "",
  loading: true,
  search: "",
  item: {},
};

const srrorState: IFilmInitialState = {
  data: [],
  error: "Error",
  loading: false,
  search: "",
  item: {},
};

const successState = {
  data: {
    Poster: "poster",
    Title: "title",
    Type: "type",
    Year: "year",
    imdbID: "id",
  },
  error: "",
  loading: false,
  search: "",
  item: {},
};

const idState: IFilmInitialState = {
  data: [],
  error: "",
  loading: false,
  search: "",
  item: {
    Actors: "Actors",
    Awards: "Awards",
    BoxOffice: "BoxOffice",
    Country: "Country",
    Director: "Director",
    Language: "Language",
    Plot: "Plot",
    Poster: "Poster",
    Production: "Production",
    Released: "Released",
    Title: "Title",
    Writer: "Writer",
    Year: "Year",
    imdbID: "imdbID",
    imdbRating: "imdbRating",
    imdbVotes: "imdbVotes",
  },
};

describe("film reducer", () => {
  it("return the initial state", () => {
    expect(filmReducer(undefined, {})).toEqual(initialState);
  });
});

describe("film action", () => {
  it("loading state true", () => {
    expect(filmReducer(initialState, filmAction())).toEqual(loadingState);
  });

  it("return the Error state", () => {
    expect(filmReducer(initialState, filmActionError("Error"))).toEqual(
      srrorState
    );
  });
  it("return the success state", () => {
    const data: IFilmList = {
      Poster: "poster",
      Title: "title",
      Type: "type",
      Year: "year",
      imdbID: "id",
    };
    expect(filmReducer(initialState, filmActionSuccess(data))).toEqual(
      successState
    );
  });
  it("return the id state", () => {
    const data = {
      Actors: "Actors",
      Awards: "Awards",
      BoxOffice: "BoxOffice",
      Country: "Country",
      Director: "Director",
      Language: "Language",
      Plot: "Plot",
      Poster: "Poster",
      Production: "Production",
      Released: "Released",
      Title: "Title",
      Writer: "Writer",
      Year: "Year",
      imdbID: "imdbID",
      imdbRating: "imdbRating",
      imdbVotes: "imdbVotes",
    };
    expect(filmReducer(initialState, filmActionID(data))).toEqual(idState);
  });
});
