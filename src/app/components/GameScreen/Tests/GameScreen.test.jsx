import React from "react";
import { shallow } from "enzyme";

import { GameScreen } from "../GameScreen";

describe("<GameScreen />", () => {
  it("Correctly Renders Sub-Components", () => {
    const wrapper = shallow(<GameScreen />);
    expect(wrapper.find("#gamescreen").length).toBe(1);
    expect(wrapper.find("ModalDisplay").length).toBe(1);
    expect(wrapper.find("ScoreDisplay").length).toBe(2);
    expect(wrapper.find("Tabs").length).toBe(1);
    expect(wrapper.find("TabPane").length).toBe(2);
    expect(wrapper.find("ItemButton").length).toBe(12);
    expect(wrapper.state("credits")).toBe(15);
    expect(wrapper.state("toAdd")).toBe(0);
    expect(wrapper.state("totalCredits")).toBe(15);
    expect(wrapper.state("creditsSpent")).toBe(0);
    expect(wrapper.state("timePlayed")).toBe(0);
    expect(wrapper.state("averageEarned")).toBe(0);
    expect(wrapper.state("hideModal")).toBe(false);
    expect(wrapper.state("currentInstruction")).toBe(0);
  });

  it("Correctly Closes Modal Window", () => {
    const wrapper = shallow(<GameScreen />);
    wrapper.instance().closeModalCallback();
    expect(wrapper.state("hideModal")).toBe(true);
  });

  it("Correctly Handles Item Button Press", () => {
    const wrapper = shallow(<GameScreen />);
    wrapper.instance().buttonPressCallback(20, 50);
    expect(wrapper.state("credits")).toBe(-5);
    expect(wrapper.state("toAdd")).toBe(50);
    expect(wrapper.state("creditsSpent")).toBe(20);
  });
});
