<template>
  <div id="app" class="VueStringFilter">    
    
		<header role="header" class="site__header header"><div class="header__wrapper"><div class="header__brand"> <a href="https://mazipan.github.io/demo/"> <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana"> </a><div class="header__title"> Irfan Maulana | Demo</div></div></div> </header>

		<div class="app">
    	<div class="grid__row content centered">
	      <h1>Lightweight Vue 2 String Manipulation Filter By Irfan Maulana</h1>


				<div>
					<b>Before filter</b>: {{ textInput }}
					<br>
					<br>
				</div>
	      <div>
					<b>Uppercase</b>: <span class="result__uppercase">{{ textInput | uppercase }}</span>
					<br>
					<b>Lowercase</b>: <span class="result__lowercase">{{ textInput | lowercase }}</span>
					<br>
					<b>Capitalize</b>: <span class="result__capitalize">{{ textInput | capitalize }}</span>
					<br>
					<b>Titlecase</b>: <span class="result__titlecase">{{ textInput | titlecase }}</span>
					<br>
					<b>Slug</b>: <span class="result__slug">{{ textInput | slug }}</span>
					<br>
					<b>Truncate</b>: <span class="result__truncate">{{ textInput | truncate(10) }}</span>
					<br>
					<b>Cut</b>: <span class="result__cut">{{ textInput | cut(10) }}</span>
					<br>
				</div>


      </div>
    </div>
		
    <div class="grid__row content centered"><h2>Contribute</h2><p> Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue-string-filter" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p></div>    
    <div class="grid__row content centered"><h2>Contact Developer</h2><p><a href="https://github.com/mazipan"> <img src="https://img.shields.io/badge/mazipan-Github-lightgrey.svg?maxAge=3600" alt="Github"> </a><a href="mailto:mazipanneh@gmail.com"> <img src="https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600" alt="Email"> </a><a href="https://mazipanneh.com/blog/"> <img src="https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600" alt="Blog"> </a><a href="https://facebook.com/mazipanneh"> <img src="https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600" alt="Facebook"> </a><br/><a href="https://twitter.com/Maz_Ipan"> <img src="https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600" alt="Twitter"> </a><a href="https://id.linkedin.com/in/irfanmaulanamazipan"> <img src="https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600" alt="Linkedin"> </a><a href="https://www.slideshare.net/IrfanMaulana21"> <img src="https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600" alt="Slideshare"> </a></p></div>
    <div class="grid__row content centered"><p> Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p></div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
			textInput: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  }
}
</script>

<style lang="scss">
.m-b-5{
	margin-bottom: 5px;
}
</style>
