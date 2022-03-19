import { mount } from "@vue/test-utils"
import TheMainHeader from "../TheMainHeader"

describe("TheMainHeader", () => {
  const wrapper = mount(TheMainHeader);
  it("render correctly", () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
