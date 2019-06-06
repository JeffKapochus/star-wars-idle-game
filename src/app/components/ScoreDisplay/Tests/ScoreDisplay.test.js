import React from "react";
import { shallow } from "enzyme";

import { ScoreDisplay } from "../ScoreDisplay";

describe("<ScoreDisplay />", () => {
  it("Correctly Renders a div and a p", () => {
    const wrapper = shallow(<ScoreDisplay />);
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("p").length).toBe(1);
  });

  it("Correctly supplies the div a class", () => {
    const wrapper = shallow(<ScoreDisplay className="testClass" />);
    expect(wrapper.find("div").hasClass("testClass")).toBe(true);
  });

  it("Correctly outputs the display label", () => {
    const wrapper = shallow(<ScoreDisplay displayLabel="test label" />);
    expect(
      wrapper
        .find("p")
        .text()
        .substring(0, 11)
    ).toBe("test label:");
  });
});
