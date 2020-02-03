import { VueConstructor } from "vue";

declare global {
  namespace NodeJS {
    interface Global {
      localVue: VueConstructor;
    }
  }
}
