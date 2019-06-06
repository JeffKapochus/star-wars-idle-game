import React from "react";
import { shallow } from "enzyme";

import { ItemButton } from "../ItemButton";

describe("<ItemButton />", () => {
  it("Correctly Renders an HTML Button", () => {
    const wrapper = shallow(<ItemButton />);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("Correctly Sets the Button's Label Text", () => {
    const wrapper = shallow(<ItemButton buttonLabel="test button label" />);
    expect(
      wrapper
        .find("button")
        .text()
        .substring(0, 17)
    ).toBe("test button label");
  });

  it("Correctly handles a button press", () => {
    const callback = jest.fn();
    const wrapper = shallow(
      <ItemButton buttonLabel="label" handleClickCallback={callback} />
    );
    wrapper.instance().handleButtonPress();
    expect(callback).toHaveBeenCalled();
  });

  it("Correctly checks that it should be disabled", () => {
    const wrapper = shallow(<ItemButton cost={100} credits={0} />);
    expect(wrapper.instance().checkDisabled()).toBe(true);
  });

  it("Correctly checks that it should NOT be disabled", () => {
    const wrapper = shallow(<ItemButton cost={0} credits={100} />);
    expect(wrapper.instance().checkDisabled()).toBe(false);
  });

  it("Correctly checks that it should be hidden", () => {
    const wrapper = shallow(<ItemButton cost={100} credits={0} />);
    wrapper.instance().checkHidden();
    expect(wrapper.state("className")).toBe("itemButton hidden");
  });

  it("Correctly checks that it should NOT be hidden", () => {
    const wrapper = shallow(<ItemButton cost={0} credits={100} />);
    wrapper.instance().checkHidden();
    expect(wrapper.state("className")).toBe("itemButton");
  });
});
