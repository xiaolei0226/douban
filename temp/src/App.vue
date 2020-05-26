<template>
	<div id="app">
		<router-view/>
		<tabber></tabber>
	</div>
</template>

<script type="text/javascript">
	import Tabber from './components/Tabbar.vue'
	import {
		obj
	} from './utils.js'
	export default {
		components: {
			Tabber
		},
		mounted() {
			obj.setRem();
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	body {
		font-size: 16px;
	}
</style>