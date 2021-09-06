import React from "react";
import { IFilmList } from "../../../store/film/interface";
import FilmItem from "./FilmItem";
import { render, shallow } from "enzyme";
import { MemoryRouter } from "react-router";

const data: IFilmList = {
  Poster: "this is images",
  Title: "Человек паук",
  Year: "15.06.2016",
  imdbID: "12345",
};

const setUp = (props?: IFilmList) =>
  render(
    <MemoryRouter>
      <FilmItem {...props} />
    </MemoryRouter>
  );

describe("FilmItem component", () => {
  it("should render FilmItem to props", () => {
    const component = setUp(data);
    expect(component).toMatchSnapshot();
  });
  it("should render FilmItem without props", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });
});

describe("FilmItem component", () => {
  it("FilmItem check for item li", () => {
    const component = shallow(<FilmItem />).find("li");
    expect(component.length).toBe(1);
  });
});
