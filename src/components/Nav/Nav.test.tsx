import React from "react";
import Nav from "./Nav";
import { render, shallow } from "enzyme";
import { MemoryRouter } from "react-router";

describe("Nav component", () => {
  it("render Nav component", () => {
    const component = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
  it("Nav component have nav wrap", () => {
    const component = shallow(<Nav />);
    expect(component.length).toBe(1);
  });
});
