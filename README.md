# :scissors: Vue String Filter

> Lightweight Vue filter for string manipulation

[![License](https://img.shields.io/github/license/mazipan/vue-string-filter.svg?maxAge=3600)](https://github.com/mazipan/vue-string-filter) ![minified](https://badgen.net/bundlephobia/minzip/vue-string-filter) [![version](https://img.shields.io/npm/v/vue-string-filter.svg)](https://www.npmjs.com/package/vue-string-filter) [![downloads](https://img.shields.io/npm/dt/vue-string-filter.svg)](https://www.npmjs.com/package/vue-string-filter) [![Travis](https://img.shields.io/travis/mazipan/vue-string-filter.svg)](https://travis-ci.org/mazipan/vue-string-filter) [![codecov](https://codecov.io/gh/mazipan/vue-string-filter/branch/master/graph/badge.svg)](https://codecov.io/gh/mazipan/vue-string-filter)

## Demo

[https://mazipan.github.io/vue-string-filter/](https://mazipan.github.io/vue-string-filter/)

## Available Filter

+ `uppercase`
+ `lowercase`
+ `capitalize`
+ `titlecase`
+ `slug`
+ `truncate`
+ `cut`
+ `remove`
+ `remove_first`
+ `replace`
+ `replace_first`
+ `append`

## Download

```bash
# NPM
npm install vue-string-filter

# Yarn
yarn add vue-string-filter
```

## Sample Usage

### Use Plugins

```javascript
import VueStringFilter from 'vue-string-filter'
Vue.use(VueStringFilter)
```

#### Import Individual Filters

```javascript
import Vue from 'vue'

import append from 'vue-string-filter/libs/append'
import capitalize from 'vue-string-filter/libs/capitalize'
import cut from 'vue-string-filter/libs/cut'
import lowercase from 'vue-string-filter/libs/lowercase'
import remove_first from 'vue-string-filter/libs/remove-first'
import remove from 'vue-string-filter/libs/remove'
import replace_first from 'vue-string-filter/libs/replace-first'
import replace from 'vue-string-filter/libs/replace'
import slug from 'vue-string-filter/libs/slug'
import titlecase from 'vue-string-filter/libs/titlecase'
import truncate from 'vue-string-filter/libs/truncate'
import uppercase from 'vue-string-filter/libs/uppercase'

Vue.filter('append', append)
Vue.filter('capitalize', capitalize)
Vue.filter('cut', cut)
Vue.filter('lowercase', lowercase)
Vue.filter('remove_first', remove_first)
Vue.filter('remove', remove)
Vue.filter('replace_first', replace_first)
Vue.filter('replace', replace)
Vue.filter('slug', slug)
Vue.filter('titlecase', titlecase)
Vue.filter('truncate', truncate)
Vue.filter('uppercase', uppercase)
```

### Use in View

```html
<span>{{ stringWillFormatted | uppercase }}</span>
<span>{{ stringWillFormatted | lowercase }}</span>
<span>{{ stringWillFormatted | capitalize }}</span>
<span>{{ stringWillFormatted | titlecase }}</span>
<span>{{ stringWillFormatted | slug }}</span>
<span>{{ stringWillFormatted | truncate(10) }}</span>
<span>{{ stringWillFormatted | cut(10) }}</span>
<span>{{ stringWillFormatted | remove('stringToRemove') }}</span>
<span>{{ stringWillFormatted | remove_first('stringToRemove') }}</span>
<span>{{ stringWillFormatted | replace('stringToReplace') }}</span>
<span>{{ stringWillFormatted | replace_first('stringToReplace') }}</span>
<span>{{ stringWillFormatted | append('stringToAppend') }}</span>
```

## Support me

- Via [trakteer](https://trakteer.id/mazipan)
- Direct support, [send me an email](mailto:mazipanneh@gmail.com)

## Contributing

If you'd like to contribute, head to the [contributing guidelines](/CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.

------

Copyright © 2019 Built with ❤️ by Irfan Maulana
