<template>
	<div id="generate">
		<div id="generator">
			<h2>Generate easy-to-remember passwords!</h2>
			<input type="text" placeholder="Click generate" :value="password.join('')" disabled />
			<button @click="generatePassword">Generate</button>
			<button @click="copyPassword">Copy</button>
			<p>Here's how you can easily remember your password</p>
			<span id="words">{{ password.join(' ') }}</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Generate',
	data() {
		return {
			common: [],
			password: [],
			copied: true
		};
	},
	methods: {
		fetchPassword() {
			const path = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json';
			axios
				.get(path)
				.then(res => {
					this.common = res.data.commonWords;
				})
				.catch(error => {
					console.log(`Fetch error: ${error}`);
				});
		},
		generatePassword(e) {
			e.preventDefault();
			let num = Math.floor(Math.random() * 99);
			let symbols = ['!', '@', '$', '&', '#', '?'];
			let symbol = symbols[Math.floor(Math.random() * symbols.length)];
			let word = '';
			let password = [];
			while (password.length < 4) {
				word = this.common[Math.floor(Math.random() * this.common.length)];
				if (word.length > 3 && word.length < 8) {
					password.push(word);
				}
			}
			password[0] = password[0].charAt(0).toUpperCase() + password[0].substr(1);
			password.push(num, symbol);
			this.password = password;
		},
		copyPassword() {
			navigator.clipboard.writeText(this.password.join(''));
			this.copied = true;
		}
	},
	created() {
		this.fetchPassword();
	}
};
</script>

<style lang="scss" scoped>
#generate {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 2rem;
	height: 100%;
	max-width: 1080px;

	h2 {
		margin-bottom: 3rem;
	}

	input {
		display: block;
		margin: 0 auto;
		padding: 1rem;
		width: 360px;
		border: none;
		border-radius: 8px;
		background-color: #603cff;
		box-shadow: 4px 6px 15px 1px #e1dbff;
		caret-color: #fff;
		font-size: 1.25rem;
		color: #fff;
		letter-spacing: 0.25px;
		text-align: center;

		&::placeholder {
			color: #fff;
		}

		&:focus {
			outline: none;
		}
	}

	button {
		display: inline-block;
		margin: 2rem 1rem;
		padding: 1rem 2rem;
		border: none;
		border-radius: 8px;
		transition: all 300ms ease-out;
		background-color: #e5e5e5;
		font-size: 1rem;
		letter-spacing: 0.25px;
		cursor: pointer;

		&:hover {
			box-shadow: 2px 3px 8px 1px darken(#e5e5e5, 5%);
		}

		&:focus {
			outline: none;
			box-shadow: 4px 6px 15px 1px darken(#e5e5e5, 5%);
		}
	}
}
</style>
