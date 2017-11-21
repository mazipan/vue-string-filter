import { createLocalVue, shallow } from 'vue-test-utils'

import App from '../App.vue'
import VueStringFilter from '../VueStringFilter'

describe('test VueStringFilter', () => {
  it('Test with all default config', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
});

