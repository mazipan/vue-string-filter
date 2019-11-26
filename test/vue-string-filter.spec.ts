import { createLocalVue, shallowMount } from "@vue/test-utils";

import VueStringFilter from "../lib/vue-string-filter";
import { VueConstructor } from "vue";
import { getComponent, getTextInput } from "./utils";

beforeAll(() => {
  const localVue = createLocalVue();

  localVue.use(VueStringFilter);

  global.localVue = localVue;
});

describe("vue-string-filter", () => {
  it("lowercase", () => {
    const component = getComponent("lowercase") as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("LOWERCASE")
    });

    expect(wrapper.html()).toBe("<p>string for lowercase filter</p>");
  });

  it("uppercase", () => {
    const component = getComponent("uppercase") as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("uppercase")
    });

    expect(wrapper.html()).toBe("<p>STRING FOR UPPERCASE FILTER</p>");
  });

  it("capitalize", () => {
    const component = getComponent("capitalize") as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("capitalize")
    });

    expect(wrapper.html()).toBe("<p>String for capitalize filter</p>");
  });

  it("titlecase", () => {
    const component = getComponent("titlecase") as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("titlecase")
    });

    expect(wrapper.html()).toBe("<p>String For Titlecase Filter</p>");
  });

  it("slug", () => {
    const component = getComponent("slug") as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("slug")
    });

    expect(wrapper.html()).toBe("<p>string-for-slug-filter</p>");
  });

  it("truncate", () => {
    const component = getComponent("truncate(6)") as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("truncate")
    });

    expect(wrapper.html()).toBe("<p>string...</p>");
  });

  it("cut", () => {
    const component = getComponent("cut(6)") as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("cut")
    });

    expect(wrapper.html()).toBe("<p>string</p>");
  });

  it("remove", () => {
    const component = getComponent(`remove('remove ')`) as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("remove")
    });

    expect(wrapper.html()).toBe("<p>string for filter</p>");
  });

  it("remove_first", () => {
    const component = getComponent(
      `remove_first('remove first ')`
    ) as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("remove first remove first")
    });

    expect(wrapper.html()).toBe("<p>string for remove first filter</p>");
  });

  it("replace", () => {
    const component = getComponent(`replace('replaced')`) as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("replace")
    });

    expect(wrapper.html()).toBe("<p>replaced</p>");
  });

  it("replace_first", () => {
    const component = getComponent(
      `replace_first('replaced')`
    ) as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("replace first")
    });

    expect(wrapper.html()).toBe("<p>replaced</p>");
  });

  it("append", () => {
    const component = getComponent(`append(' is appended')`) as VueConstructor;
    const wrapper = shallowMount(component, {
      localVue: global.localVue
    });

    wrapper.setData({
      textInput: getTextInput("append")
    });

    expect(wrapper.html()).toBe("<p>string for append filter is appended</p>");
  });
});
