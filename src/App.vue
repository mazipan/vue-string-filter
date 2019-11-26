<template>
<div id="app" class="VueStringFilter">

    <header role="header" class="site__header header">
        <div class="header__wrapper">
            <div class="header__brand">
                <a href="https://mazipan.github.io/demo/"> <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana"> </a>
                <div class="header__title"> Irfan Maulana | Demo</div>
            </div>
        </div>
    </header>

    <div class="app">
        <div class="grid__row content centered">
            <h1>Lightweight Vue 2 String Manipulation Filter By Irfan Maulana</h1>
            <div>
                <input v-model="textInput" class="textfield textfield--shadow" />
                <p><b>Before filter</b>: {{ textInput }}</p>
                <br>
                <br>
            </div>
            <div>
                <h2>Result :</h2>
                <p><b>Uppercase</b>: <span class="result__uppercase">{{ textInput | uppercase }}</span></p>
                <p><b>Lowercase</b>: <span class="result__lowercase">{{ textInput | lowercase }}</span></p>
                <p><b>Capitalize</b>: <span class="result__capitalize">{{ textInput | capitalize }}</span></p>
                <p><b>Titlecase</b>: <span class="result__titlecase">{{ textInput | titlecase }}</span></p>
                <p><b>Slug</b>: <span class="result__slug">{{ textInput | slug }}</span></p>
                <p><b>Truncate</b>: <span class="result__truncate">{{ textInput | truncate(10) }}</span></p>
                <p><b>Cut</b>: <span class="result__cut">{{ textInput | cut(10) }}</span></p>
                <p><b>Remove</b>: <span class="result__remove">{{ textInput | remove(',') }}</span></p>
                <p><b>Remove First</b>: <span class="result__remove_first">{{ textInput | remove_first(',') }}</span></p>
                <p><b>Replace</b>: <span class="result__replace">{{ textInput | replace('Remove All') }}</span></p>
                <p><b>Replace First</b>: <span class="result__replace_first">{{ textInput | remove_first('Removed First') }}</span></p>
                <p><b>Append</b>: <span class="result__append">{{ textInput | append('This is append string.') }}</span></p>
            </div>

        </div>
    </div>

    <div class="grid__row content centered">
        <h2>Contribute</h2>
        <p> Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue-string-filter" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p>
    </div>
    <div class="grid__row content centered">
        <h2>Contact Developer</h2>
        <p>
            <a href="https://github.com/mazipan">
                <img src="https://img.shields.io/badge/mazipan-Github-lightgrey.svg?maxAge=3600" alt="Github">
            </a>
            &nbsp;
            <a href="https://mazipanneh.com/blog/">
                <img src="https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600" alt="Blog">
            </a>
            &nbsp;
            <a href="https://facebook.com/mazipanneh">
                <img src="https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600" alt="Facebook">
            </a>
            &nbsp;
            <a href="https://twitter.com/Maz_Ipan">
                <img src="https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600" alt="Twitter">
            </a>
        </p>
    </div>
    <div class="grid__row content centered">
        <p> Copyright © 2019 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p>
    </div>

</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
		return {
			textInput: 'Lorem ipsum dolor sit amet, consectetur adipiscing, elit.'
		}
	}
})
</script>

<style lang="scss">
.m-b-5 {
  margin-bottom: 5px;
}
</style>
