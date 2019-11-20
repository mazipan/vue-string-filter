import { Component } from "vue";
export declare const getComponent: (
  filter: string
) => Component<
  import("vue/types/options").DefaultData<never>,
  import("vue/types/options").DefaultMethods<never>,
  import("vue/types/options").DefaultComputed,
  Record<string, any>
>;
export declare const getTextInput: (test: string) => string;
