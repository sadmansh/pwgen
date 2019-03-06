<template>
	<header>
		<h1>pwgen</h1>
		<a href="https://github.com/sadmansh/pwgen" target="+_blank">Fork on GitHub</a>
	</header>
</template>

<script>
export default {
	name: 'Header'
};
</script>

<style lang="scss" scoped>
header {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	max-width: 1080px;

	h1 {
		transition: color 300ms ease-out;
		&:hover {
			color: #603cff;
		}
	}

	a {
		text-decoration: none;
		color: #603cff;
		font-weight: bold;
	}
}
</style>
