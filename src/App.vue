<template>
	<div id="app">
		<Generate msg="Click to generate"/>
	</div>
</template>

<script>
import Generate from './components/Generate.vue'

export default {
	name: 'app',
	components: {
		Generate
	}
}
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
