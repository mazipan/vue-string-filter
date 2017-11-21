const VueStringFilter = {
  install (Vue, options) {

    // helper to check undefined variable
    function _isUndefined (obj) {
      return typeof obj === "undefined"
    }

    if(_isUndefined(options)) options = {}

    Vue.filter('lowercase', function (value) {
      return value
    })

    Vue.filter('uppercase', function (value) {
      return value
    })

    Vue.filter('capitalize', function (value) {
      return value
    })

  }
}

export default VueStringFilter
