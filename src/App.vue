<template>
	<div id="app">
		<Header />
		<Generate msg="Click to generate" />
	</div>
</template>

<script>
import Generate from './components/Generate.vue';
import Header from './components/Header.vue';

export default {
	name: 'app',
	components: {
		Generate,
		Header
	}
};
</script>

<style lang="scss">
*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	margin: 0;
}
#app {
	position: relative;
	height: 100vh;
	max-height: 100vh;
	background: linear-gradient(to bottom right, #fff, #e5e5e5);
	background-color: #e1dbff;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
