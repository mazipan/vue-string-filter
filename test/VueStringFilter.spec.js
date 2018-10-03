import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'

import App from '../App.vue'
import VueStringFilter from '../VueStringFilter'

describe('test VueStringFilter', () => {
  it('Test with all default config', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })
  })
  it('Test lowercase', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    wrapper.setData({ textInput: 'Vue string for lowercase filter testing' })

    expect(wrapper.html()).toContain('vue-string-for-lowercase-filter-testing');
  })
  it('Test uppercase', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    wrapper.setData({ textInput: 'string for uppercase filter testing' })

    expect(wrapper.html()).toContain('STRING FOR UPPERCASE FILTER TESTING');
  })
  it('Test titlecase', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    wrapper.setData({ textInput: 'string for titlecase filter testing' })

    expect(wrapper.html()).toContain('String For Titlecase Filter Testing');
  })
  it('Test capitalize', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    wrapper.setData({ textInput: 'string for capitalize filter testing' })

    expect(wrapper.html()).toContain('String for capitalize filter testing');
  })
  it('Test slug', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    wrapper.setData({ textInput: 'string for slug filter testing' })

    expect(wrapper.html()).toContain('string-for-slug-filter-testing');
  })
  it('Test truncate', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    wrapper.setData({ textInput: 'string for truncate filter testing' })

    expect(wrapper.html()).toContain('string for...');
  })
  it('Test cut', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    wrapper.setData({ textInput: 'string for cut filter testing' })

    expect(wrapper.html()).toContain('string for');
  })
  it('Test append', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })
    // Test rendered HTML output of the append filter
    expect(wrapper.html()).toContain('This is append string.')
  })
  it('Test replace', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })
  })
  it('Test replace_first', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })
  })
  it('Test remove', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    expect(wrapper.text()).toContain('Lorem ipsum dolor sit amet consectetur adipiscing elit.')
  })
  it('Test remove_first', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallowMount(App, {
      localVue
    })

    expect(wrapper.text()).toContain('Lorem ipsum dolor sit amet consectetur adipiscing, elit.')
  })
});
