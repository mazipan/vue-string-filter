const VueStringFilter = {
  install(Vue, options) {

    Vue.filter('lowercase', function (value) {

      return value.toString().toLowerCase()
    })

    Vue.filter('uppercase', function (value) {

      return value.toString().toUpperCase()
    })

    Vue.filter('capitalize', function (value) {

      return value.charAt(0).toUpperCase() + value.slice(1)
    })

    Vue.filter('titlecase', function (value) {

      return value.replace(/\w\S*/g, function (txt) { 
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() 
      })
    })
    
    Vue.filter('slug', function (value) {
      
      // credit for gist : https://gist.github.com/mathewbyrne/1280286
      let result = value.toString()
                        .toLowerCase()
                        .trim()
                        .replace(/&/g, '-and-') //
                        .replace(/[\s\W-]+/g, '-')
                        .replace(/--+/g, '-')
                        .replace(/^-+|-+$/g, '')
                        
      return result
    })

  }
}

export default VueStringFilter
