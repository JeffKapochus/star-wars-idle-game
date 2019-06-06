import React from "react";
import { shallow } from "enzyme";

import { ModalDisplay } from "../ModalDisplay";

describe("<ModalDisplay />", () => {
  it("Correctly Renders the appropriate divs and p", () => {
    const wrapper = shallow(<ModalDisplay />);
    expect(wrapper.find("div").length).toBe(3);
    expect(wrapper.find("#modalBlocker").length).toBe(1);
    expect(wrapper.find("#dialogueDisplay").length).toBe(1);
    expect(wrapper.find("#closeButton").length).toBe(1);
    expect(wrapper.find("p").length).toBe(1);
  });

  it("Correctly gives the modal blocker a totalBlock class", () => {
    const wrapper = shallow(<ModalDisplay block={true} />);
    expect(wrapper.find("#modalBlocker").hasClass("totalBlock")).toBe(true);
  });

  it("Correctly does not give the modal blocker a totalBlock class", () => {
    const wrapper = shallow(<ModalDisplay block={false} />);
    expect(wrapper.find("#modalBlocker").hasClass("totalBlock")).toBe(false);
  });

  it("Correctly hides the modal window", () => {
    const wrapper = shallow(<ModalDisplay hide={true} />);
    expect(wrapper.find("#modalBlocker").hasClass("hidden")).toBe(true);
  });

  it("Correctly does not hide the modal window", () => {
    const wrapper = shallow(<ModalDisplay hide={false} />);
    expect(wrapper.find("#modalBlocker").hasClass("hidden")).toBe(false);
  });

  it("Correctly shows the modal text", () => {
    const wrapper = shallow(<ModalDisplay text="Hi dad" />);
    expect(wrapper.find("p").text()).toBe("Hi dad");
  });

  it("Correctly calls the close modal function", () => {
    const closeModalFunc = jest.fn();
    const wrapper = shallow(<ModalDisplay closeModal={closeModalFunc} />);
    wrapper.find("#closeButton").simulate("click");
    expect(closeModalFunc).toHaveBeenCalled();
  });
});
