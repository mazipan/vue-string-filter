import { Component } from "vue";

export const getComponent = (filter: string): Component => {
  return {
    template: `<p>{{ textInput | ${filter} }}</p>`,
    data() {
      return {
        textInput: ""
      };
    }
  };
};

export const getTextInput = (test: string): string => {
  return `string for ${test} filter`;
};
