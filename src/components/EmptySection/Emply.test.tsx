import React from "react";
import { render } from "enzyme";
import EmptySection from "./EmptySection";

describe("EmptySection component", () => {
  it("should render EmptySection component", () => {
    const component = render(<EmptySection />);
    expect(component).toMatchSnapshot();
  });
});
