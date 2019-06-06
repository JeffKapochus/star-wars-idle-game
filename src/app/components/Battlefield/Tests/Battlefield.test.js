import React from "react";
import { shallow } from "enzyme";

import { Battlefield } from "../Battlefield";

describe("<ScoreDisplay />", () => {
  it("Correctly Renders a div and an img", () => {
    const wrapper = shallow(<Battlefield />);
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("img").length).toBe(1);
  });
});
