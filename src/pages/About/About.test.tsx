import React from "react";
import { render } from "enzyme";
import About from "./About";

describe("render About", () => {
  const wrapper = render(<About />);
  it("render About no props", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
