<template>
  <div class="home VueCurrencyFilter">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Vue String Filter
          </h1>
          <h2 class="subtitle">
            Lightweight Vue filter for string manipulation
          </h2>
          <a
            href="https://github.com/mazipan/vue-string-filter"
            class="button is-primary is-inverted is-outlined">
            Fork in Github
          </a>
          <br><br>
          <a
            href="https://www.npmjs.com/package/vue-string-filter"
            target="_blank"
            rel="noopener noreferer">
            <img
              alt="NPM Version"
              src="https://img.shields.io/npm/v/vue-string-filter.svg">
          </a>
          <a
            href="https://github.com/mazipan/vue-string-filter"
            target="_blank"
            rel="noopener noreferer">
            <img
              alt="GitHub Stars"
              src="https://img.shields.io/github/stars/mazipan/vue-string-filter.svg?style=social">
          </a>
        </div>
      </div>
    </section>

    <section class="ads">
      <InArticleAdsense
        data-ad-client="ca-pub-5442972248172818"
        data-ad-slot="7974047383" />
    </section>

    <section class="container configs">
      <h2 class="title">
        ⚙️ Demo
      </h2>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">
            Text Input:
          </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                v-model="textInput"
                class="input"
                type="text">
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">
            Result:
          </label>
        </div>
        <div
          class="field-body"
          style="align-items: flex-end;">
          <div class="field" style="text-align: left">
            <p><b class="subtitle">Uppercase</b>: <span class="result__uppercase">{{ textInput | uppercase }}</span></p>
            <p><b class="subtitle">Lowercase</b>: <span class="result__lowercase">{{ textInput | lowercase }}</span></p>
            <p><b class="subtitle">Capitalize</b>: <span class="result__capitalize">{{ textInput | capitalize }}</span></p>
            <p><b class="subtitle">Titlecase</b>: <span class="result__titlecase">{{ textInput | titlecase }}</span></p>
            <p><b class="subtitle">Slug</b>: <span class="result__slug">{{ textInput | slug }}</span></p>
            <p><b class="subtitle">Truncate</b>: <span class="result__truncate">{{ textInput | truncate(10) }}</span></p>
            <p><b class="subtitle">Cut</b>: <span class="result__cut">{{ textInput | cut(10) }}</span></p>
            <p><b class="subtitle">Remove</b>: <span class="result__remove">{{ textInput | remove(',') }}</span></p>
            <p><b class="subtitle">Remove First</b>: <span class="result__remove_first">{{ textInput | remove_first(',') }}</span></p>
            <p><b class="subtitle">Replace</b>: <span class="result__replace">{{ textInput | replace('Remove All') }}</span></p>
            <p><b class="subtitle">Replace First</b>: <span class="result__replace_first">{{ textInput | remove_first('Removed First') }}</span></p>
            <p><b class="subtitle">Append</b>: <span class="result__append">{{ textInput | append('This is append string.') }}</span></p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Built with ❤️ by Irfan Maulana
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import 'prismjs'
import 'prismjs/themes/prism-twilight.css'
import 'prismjs/components/prism-scss.min'
import 'prismjs/plugins/autolinker/prism-autolinker.min'
import 'prismjs/plugins/autolinker/prism-autolinker.css'
import Prism from 'vue-prism-component'

Vue.component('prism', Prism)

export default {
  name: 'Home',
  data () {
    return {
      textInput: 'Lorem ipsum dolor sit amet, consectetur adipiscing, elit.'
    }
  }
}
</script>

<style lang="scss">
  @import "~bulma-dracula/src/bulma-dracula.scss";

  pre:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  .radio, .footer{
    color: #fff;
  }

  .number{
    text-align: center;
    vertical-align: middle;
    font-size: .9rem;
    border-radius: 0;
    background-color: transparent;
    margin: 0;
    padding: 0;
  }
  .container{
    margin-top: 2em;
  }
</style>
