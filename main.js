// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

/* global process */
if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

import VueStringFilter from './VueStringFilter.js'
Vue.use(VueStringFilter, {symbol: '$'})


new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})

