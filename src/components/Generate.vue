<template>
	<div id="generate">
		<div id="generator">
			<h2>Generate easy-to-remember passwords!</h2>
			<input type="text" id="pw-output" placeholder="Click generate below" :value="password.join('')" />
			<button @click="generatePassword">Generate</button>
			<button @click="copyPassword">{{ copyText }}</button>
			<span id="pwn" v-bind:class="{ pwned: isPwned }"></span>
			<p>Here's how you can easily remember your password</p>
			<span id="words">{{ password.join(' ') }}</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import sha1 from 'sha1'

export default {
	name: 'Generate',
	data() {
		return {
			common: [],
			password: [],
			copied: true,
			copyText: 'Copy',
			isPwned: false
		}
	},
	methods: {
		fetchPassword() {
			const path = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json'
			axios
				.get(path)
				.then(res => {
					this.common = res.data.commonWords
				})
				.catch(error => {
					console.log(`Fetch error: ${error}`)
				})
		},
		generatePassword(e) {
			e.preventDefault()
			let num = Math.floor(Math.random() * 99)
			let symbols = ['!', '@', '$', '&', '#', '?']
			let symbol = symbols[Math.floor(Math.random() * symbols.length)]
			let word = ''
			let password = []
			while (password.length < 4) {
				word = this.common[Math.floor(Math.random() * this.common.length)]
				if (word.length > 3 && word.length < 8) {
					password.push(word)
				}
			}
			password[0] = password[0].charAt(0).toUpperCase() + password[0].substr(1)
			password.push(num, symbol)
			this.password = password
			this.copyText = 'Copy'
			this.pwned().then(res => {
				if (this.isPwned == false) {
					document.getElementById('pwn').innerHTML = `This password was never exposed in a data breach. You're good to go!`
				} else {
					document.getElementById('pwn').innerHTML = `Sorry, this password was exposed in a data breach. Please generate again.`
				}
			})
		},
		copyPassword() {
			const output = document.getElementById('pw-output')
			output.focus()
			output.select()
			document.execCommand('copy')
			this.copyText = 'Copied'
			let that = this
			setTimeout(function() {
				that.copyText = 'Copy'
			}, 2000)
		},
		async pwned() {
			const hash = sha1(this.password.join(''))
			let prefix = hash.substr(0, 5)
			const res = await axios.get('https://api.pwnedpasswords.com/range/' + prefix)
			let lines = res.data.split('\n')
			for (let i = 0; i < lines.length; i++) {
				lines[i] = lines[i].substring(0, lines[i].indexOf(':'))
				if (hash.toUpperCase().endsWith(lines[i])) {
					this.isPwned = true
				}
			}
		}
	},
	created() {
		this.fetchPassword()
	}
}
</script>

<style lang="scss" scoped>
#generate {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 2rem;
	margin: 0 auto;
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

	#pwn {
		display: block;
		padding: 0.5rem 1rem;
		background-color: #d8d8d8;
		border-radius: 8px;
		color: #777;
		font-size: 1rem;

		.pwned {
			background-color: crimson;
			color: #e5e5e5;
		}

		&:empty {
			display: none;
		}
	}

	#words {
		font-size: 1.25rem;
	}

	button {
		display: inline-block;
		margin: 2rem 1rem;
		padding: 1rem 2rem;
		width: 130px;
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
