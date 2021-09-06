import React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

describe("should render Container component", () => {
  it("should contain .container wrapper", () => {
    const wrapper = shallow(<Container />).find(".container");
    expect(wrapper.length).toBe(1);
  });
});
