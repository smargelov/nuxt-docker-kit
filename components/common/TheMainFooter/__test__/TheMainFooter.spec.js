import { mount } from "@vue/test-utils"
import TheMainFooter from "../TheMainFooter"

describe("TheMainFooter", () => {
  const wrapper = mount(TheMainFooter)
  it("render correctly", () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
