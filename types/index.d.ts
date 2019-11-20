import { PluginFunction, PluginObject, VueConstructor } from "vue";

export interface VueStringFilterOptions {}

export interface VueStringFilter extends PluginObject<VueStringFilterOptions> {
  install(Vue: VueConstructor): PluginFunction<VueStringFilterOptions>;
}

export type AppDataReturnType = {
  textInput: string;
};
