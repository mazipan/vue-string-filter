import { VueConstructor } from "vue";
import lowercase from "./filters/lowercase";
import uppercase from "./filters/uppercase";
import capitalize from "./filters/capitalize";
import titlecase from "./filters/titlecase";
import slug from "./filters/slug";
import truncate from "./filters/truncate";
import cut from "./filters/cut";
import remove from "./filters/remove";
import remove_first from "./filters/remove-first";
import replace from "./filters/replace";
import replace_first from "./filters/replace-first";
import append from "./filters/append";

class VueStringFilter implements VueStringFilter {
  install(Vue: VueConstructor) {
    Vue.filter("lowercase", lowercase);

    Vue.filter("uppercase", uppercase);

    Vue.filter("capitalize", capitalize);

    Vue.filter("titlecase", titlecase);

    Vue.filter("slug", slug);

    Vue.filter("truncate", truncate);

    Vue.filter("cut", cut);

    Vue.filter("remove", remove);

    Vue.filter("remove_first", remove_first);

    Vue.filter("replace", replace);

    Vue.filter("replace_first", replace_first);

    Vue.filter("append", append);
  }
}

export default new VueStringFilter();
