import React from "react";
import { shallow } from "enzyme";

import { NumberFormat } from "../NumberFormat";

describe("<ItemButton />", () => {
  it("Correctly Renders a span", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.find("span").length).toBe(1);
  });

  it("Correctly Renders a 0 with no prop", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.find("span").text()).toBe("0.00");
  });

  it("Correctly Renders a prop", () => {
    const wrapper = shallow(<NumberFormat value={12} />);
    expect(wrapper.find("span").text()).toBe("12.00");
  });

  it("Correctly abbreviates a number of less than 3 digits", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.instance().abbreviate(12)).toBe("12.00");
  });

  it("Correctly abbreviates a number of more than 4 digits with 2 significant decimals", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.instance().abbreviate(1200)).toBe("1.20k");
  });

  it("Correctly abbreviates a number of more than 5 digits with 1 significant decimals", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.instance().abbreviate(12000)).toBe("12.0k");
  });

  it("Correctly abbreviates a number of more than 6 digits with 0 significant decimals", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.instance().abbreviate(120000)).toBe("120k");
  });

  it("Correctly abbreviates a number in the millions", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.instance().abbreviate(1200000)).toBe("1.20m");
  });

  it("Correctly abbreviates a number in the billions", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.instance().abbreviate(1200000000)).toBe("1.20b");
  });

  it("Correctly abbreviates a number in the trillions", () => {
    const wrapper = shallow(<NumberFormat />);
    expect(wrapper.instance().abbreviate(1200000000000)).toBe("1.20t");
  });
  /**
   * At this point it is safe to assume that it is behaving properly
   * and further suffixes will work
   */

  it("Correctly renders a prop with a prefix", () => {
    const wrapper = shallow(<NumberFormat value={12} prefix="$" />);
    expect(wrapper.find("span").text()).toBe("$12.00");
  });
});
