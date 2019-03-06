<template>
	<div id="generate">
		<input type="text" placeholder="Click generate" :value="password.join('')">
		<button @click="generatePassword">Generate</button>
		<button @click="copyPassword">Copy</button>
		<p>Here's how you can easily remember your password</p>
		<span id="words">{{ password.join(' ') }}</span>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Generate',
	data() {
		return {
			common: [],
			password: [],
			copied: true
    	}
	},
	methods: {
		fetchPassword() {
			const path = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json'
			axios.get(path)
				.then((res) => {
					this.common = res.data.commonWords
				})
				.catch((error) => {
					console.log(`Fetch error: ${error}`)
				})
		},
		generatePassword(e) {
			e.preventDefault();
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
		},
		copyPassword() {
			navigator.clipboard.writeText(this.password.join(''))
			this.copied = true
		}
	},
	created() {
		this.fetchPassword()
	}
}
</script>