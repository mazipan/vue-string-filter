import Vue from 'vue'
import Ads from 'vue-google-adsense'

import App from './App.vue'
import router from './router'
import store from './store'

import VueStringFilter from './lib/VueStringFilter'

const script2 = require('vue-script2')

Vue.use(script2)
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

Vue.use(VueStringFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
