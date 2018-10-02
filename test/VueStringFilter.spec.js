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
  it('Test lowercase', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test uppercase', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test titlecase', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test capitalize', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test slug', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test truncate', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test cut', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test replace', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test replace_first', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
});

