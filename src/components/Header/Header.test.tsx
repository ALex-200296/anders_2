import React from "react";
import { render, shallow } from "enzyme";
import Header from "./Header";
import { MemoryRouter } from "react-router";

describe("Header component", () => {
  it("should render Header component", () => {
    const component = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
  it("should render Header have wrapper", () => {
    const component = shallow(<Header />).find("header");
    expect(component.length).toBe(1);
  });
});
