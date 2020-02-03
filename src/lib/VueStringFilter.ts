import { VueConstructor } from 'vue'
import lowercase from './lowercase'
import uppercase from './uppercase'
import capitalize from './capitalize'
import titlecase from './titlecase'
import slug from './slug'
import truncate from './truncate'
import cut from './cut'
import remove from './remove'
import removeFirst from './remove-first'
import replace from './replace'
import replaceFirst from './replace-first'
import append from './append'

class VueStringFilter implements VueStringFilter {
  install (Vue: VueConstructor) {
    Vue.filter('lowercase', lowercase)

    Vue.filter('uppercase', uppercase)

    Vue.filter('capitalize', capitalize)

    Vue.filter('titlecase', titlecase)

    Vue.filter('slug', slug)

    Vue.filter('truncate', truncate)

    Vue.filter('cut', cut)

    Vue.filter('remove', remove)

    Vue.filter('remove_first', removeFirst)

    Vue.filter('replace', replace)

    Vue.filter('replace_first', replaceFirst)

    Vue.filter('append', append)
  }
}

export default new VueStringFilter()
