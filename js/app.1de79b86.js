(function(t){function e(e){for(var a,n,u=e[0],l=e[1],c=e[2],o=0,p=[];o<u.length;o++)n=u[o],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,u=1;u<s.length;u++){var l=s[u];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vue-string-filter/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"056b":function(t,e,s){"use strict";s("4d63"),s("ac1f"),s("25f0"),s("5319"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t,e){return a.isExists(t)?t.replace(new RegExp(t,"g"),e):""}e.default=r},"0613":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("9ab4"),r=a.__importDefault(s("2b0e")),i=a.__importDefault(s("2f62"));r.default.use(i.default),e.default=new i.default.Store({state:{},mutations:{},actions:{},modules:{}})},"20fb":function(t,e,s){"use strict";s("ac1f"),s("5319"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t,e){return a.isExists(t)?t.replace(t,e):""}e.default=r},"21bb":function(t,e,s){"use strict";var a=s("2dad"),r=s.n(a);r.a},"2dad":function(t,e,s){},"36c1":function(t,e,s){"use strict";function a(t){return void 0!==t&&null!==t}Object.defineProperty(e,"__esModule",{value:!0}),e.isExists=void 0,e.isExists=a},"37bc":function(t,e,s){"use strict";s("4d63"),s("ac1f"),s("25f0"),s("5319"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t,e){return a.isExists(t)?t.replace(new RegExp(e,"g"),""):""}e.default=r},"3dfd":function(t,e,s){"use strict";s.r(e);var a=s("cf3a"),r=s("6f68");for(var i in r)"default"!==i&&function(t){s.d(e,t,(function(){return r[t]}))}(i);s("5c0b");var n=s("2877"),u=Object(n["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"4f71":function(t,e,s){"use strict";s("ac1f"),s("5319"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t,e){return a.isExists(t)?t.replace(e,""):""}e.default=r},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),r=s.n(a);r.a},"6f68":function(t,e,s){"use strict";s.r(e);var a=s("78c7"),r=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"78c7":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("9ab4"),r=s("60a3"),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e}(r.Vue);e.default=i},"7ac6":function(t,e,s){"use strict";s("fb6a"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t,e){return a.isExists(t)?t.length<e?t:t.slice(0,e)+"...":""}e.default=r},"7fe6":function(t,e,s){"use strict";s("fb6a"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t,e){return a.isExists(t)?t.length<e?t:t.slice(0,e):""}e.default=r},"9c0c":function(t,e,s){},adb5:function(t,e,s){"use strict";s("d3b7"),s("25f0"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t){return a.isExists(t)?t.toString().toLowerCase():""}e.default=r},afbc:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("9ab4"),r=a.__importDefault(s("2b0e")),i=a.__importDefault(s("8c4f")),n=a.__importDefault(s("bb51"));r.default.use(i.default);var u=[{path:"/",name:"home",component:n.default}],l=new i.default({routes:u});e.default=l},baef:function(t,e,s){"use strict";s("99af"),s("d3b7"),s("25f0"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t,e){return a.isExists(t)?t.toString().concat(e):""}e.default=r},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home VueCurrencyFilter"},[t._m(0),s("section",{staticClass:"ads"},[s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}})],1),s("section",{staticClass:"container configs"},[s("h2",{staticClass:"title"},[t._v(" ⚙️ Demo ")]),s("div",{staticClass:"field is-horizontal"},[t._m(1),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.textInput},on:{input:function(e){e.target.composing||(t.textInput=e.target.value)}}})])])])]),s("div",{staticClass:"field is-horizontal"},[t._m(2),s("div",{staticClass:"field-body",staticStyle:{"align-items":"flex-end"}},[s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("p",[s("b",{staticClass:"subtitle"},[t._v("Uppercase")]),t._v(": "),s("span",{staticClass:"result__uppercase"},[t._v(t._s(t._f("uppercase")(t.textInput)))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Lowercase")]),t._v(": "),s("span",{staticClass:"result__lowercase"},[t._v(t._s(t._f("lowercase")(t.textInput)))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Capitalize")]),t._v(": "),s("span",{staticClass:"result__capitalize"},[t._v(t._s(t._f("capitalize")(t.textInput)))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Titlecase")]),t._v(": "),s("span",{staticClass:"result__titlecase"},[t._v(t._s(t._f("titlecase")(t.textInput)))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Slug")]),t._v(": "),s("span",{staticClass:"result__slug"},[t._v(t._s(t._f("slug")(t.textInput)))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Truncate")]),t._v(": "),s("span",{staticClass:"result__truncate"},[t._v(t._s(t._f("truncate")(t.textInput,10)))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Cut")]),t._v(": "),s("span",{staticClass:"result__cut"},[t._v(t._s(t._f("cut")(t.textInput,10)))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Remove")]),t._v(": "),s("span",{staticClass:"result__remove"},[t._v(t._s(t._f("remove")(t.textInput,",")))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Remove First")]),t._v(": "),s("span",{staticClass:"result__remove_first"},[t._v(t._s(t._f("remove_first")(t.textInput,",")))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Replace")]),t._v(": "),s("span",{staticClass:"result__replace"},[t._v(t._s(t._f("replace")(t.textInput,"Remove All")))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Replace First")]),t._v(": "),s("span",{staticClass:"result__replace_first"},[t._v(t._s(t._f("remove_first")(t.textInput,"Removed First")))])]),s("p",[s("b",{staticClass:"subtitle"},[t._v("Append")]),t._v(": "),s("span",{staticClass:"result__append"},[t._v(t._s(t._f("append")(t.textInput,"This is append string.")))])])])])])]),t._m(3)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-primary is-medium"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"title"},[t._v(" Vue String Filter ")]),s("h2",{staticClass:"subtitle"},[t._v(" Lightweight Vue filter for string manipulation ")]),s("a",{staticClass:"button is-primary is-inverted is-outlined",attrs:{href:"https://github.com/mazipan/vue-string-filter"}},[t._v(" Fork in Github ")]),s("br"),s("br"),s("a",{attrs:{href:"https://www.npmjs.com/package/vue-string-filter",target:"_blank",rel:"noopener noreferer"}},[s("img",{attrs:{alt:"NPM Version",src:"https://img.shields.io/npm/v/vue-string-filter.svg"}})]),s("a",{attrs:{href:"https://github.com/mazipan/vue-string-filter",target:"_blank",rel:"noopener noreferer"}},[s("img",{attrs:{alt:"GitHub Stars",src:"https://img.shields.io/github/stars/mazipan/vue-string-filter.svg?style=social"}})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field-label is-normal"},[s("label",{staticClass:"label"},[t._v(" Text Input: ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field-label is-normal"},[s("label",{staticClass:"label"},[t._v(" Result: ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[t._v(" Built with ❤️ by Irfan Maulana ")])])])}],i=s("2b0e"),n=(s("c197"),s("92bf"),s("70cb"),s("a888"),s("5253"),s("8d51")),u=s.n(n);i["default"].component("prism",u.a);var l={name:"Home",data:function(){return{textInput:"Lorem ipsum dolor sit amet, consectetur adipiscing, elit."}}},c=l,f=(s("21bb"),s("2877")),o=Object(f["a"])(c,a,r,!1,null,null,null);e["default"]=o.exports},c3d1:function(t,e,s){"use strict";s("d3b7"),s("ac1f"),s("25f0"),s("5319"),s("498a"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t){return a.isExists(t)?t.toString().toLowerCase().trim().replace(/&/g,"-and-").replace(/[\s\W]/g,"-").replace(/--+/g,"-").replace(/^-+|-+$/g,"-"):""}e.default=r},c4af:function(t,e,s){"use strict";s("fb6a"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t){return a.isExists(t)?t.charAt(0).toUpperCase()+t.slice(1):""}e.default=r},cd49:function(t,e,s){"use strict";s("e260"),s("e6cf"),s("cca6"),s("a79d"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("9ab4"),r=a.__importDefault(s("2b0e")),i=a.__importDefault(s("bf74")),n=a.__importDefault(s("3dfd")),u=a.__importDefault(s("afbc")),l=a.__importDefault(s("0613")),c=a.__importDefault(s("d0be")),f=s("395c");r.default.use(f),r.default.use(i.default.Adsense),r.default.use(i.default.InArticleAdsense),r.default.use(i.default.InFeedAdsense),r.default.use(c.default),r.default.config.productionTip=!1,new r.default({router:u.default,store:l.default,render:function(t){return t(n.default)}}).$mount("#app")},cf3a:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[];s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return r}))},d0be:function(t,e,s){"use strict";s("4de4"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("9ab4"),r=a.__importDefault(s("adb5")),i=a.__importDefault(s("e639")),n=a.__importDefault(s("c4af")),u=a.__importDefault(s("f30b")),l=a.__importDefault(s("c3d1")),c=a.__importDefault(s("7ac6")),f=a.__importDefault(s("7fe6")),o=a.__importDefault(s("37bc")),p=a.__importDefault(s("4f71")),d=a.__importDefault(s("056b")),_=a.__importDefault(s("20fb")),v=a.__importDefault(s("baef")),b=function(){function t(){}return t.prototype.install=function(t){t.filter("lowercase",r.default),t.filter("uppercase",i.default),t.filter("capitalize",n.default),t.filter("titlecase",u.default),t.filter("slug",l.default),t.filter("truncate",c.default),t.filter("cut",f.default),t.filter("remove",o.default),t.filter("remove_first",p.default),t.filter("replace",d.default),t.filter("replace_first",_.default),t.filter("append",v.default)},t}();e.default=new b},e639:function(t,e,s){"use strict";s("d3b7"),s("25f0"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t){return a.isExists(t)?t.toString().toUpperCase():""}e.default=r},f30b:function(t,e,s){"use strict";s("ac1f"),s("5319"),Object.defineProperty(e,"__esModule",{value:!0});var a=s("36c1");function r(t){return a.isExists(t)?t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})):""}e.default=r}});
//# sourceMappingURL=app.1de79b86.js.map