import Vue from "vue";
import App from "./App.vue";
import VueStringFilter from "../lib/vue-string-filter";

if (process.env.NODE_ENV !== "production") {
  Vue.config.devtools = true;
}

Vue.use(VueStringFilter);

new Vue({
  el: "#app",
  template: "<App />",
  components: { App }
});
