import { shallowMount } from "@vue/test-utils";
import TheFirstMainPageSection from "../TheFirstMainPageSection";

describe("TheFirstMainPageSection", () => {
  const wrapper = shallowMount(TheFirstMainPageSection);
  it("render correctly", () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
