<template>
	<div id="results">
		<input type="text" placeholder="Search music..." v-model="search" @input="searchMusic">
		<ul class="search-results" v-for="track in results">
			<li @click="getMusic(track.track.track_id)">{{ track.track.track_name }}</li>
		</ul>
		<div class="lyrics">
			{{ lyrics }}
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'SearchMusic',
	data() {
		return {
			search: '',
			results: [],
			lyrics: '',
		}
	},
	methods: {
		searchMusic() {
			const ApiPath = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search`
			axios.get(ApiPath, {
				params: {
					apikey: `3fb64d66ca9f6667614d84f7af1edd0f`,
					q: this.search,
				}
			})
			.then(res => {
				console.log(res.data.message.body.track_list)
				this.results = res.data.message.body.track_list
			})
			.catch(error => {
				console.error(error)
			})
		},

		getMusic(id) {
			const getMusicPath = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get`
			axios.get(getMusicPath, {
				params: {
					apikey: `3fb64d66ca9f6667614d84f7af1edd0f`,
					track_id: id,
				}
			})
			.then(res => {
				console.log(res.data.message.body.lyrics.lyrics_body)
				this.lyrics = res.data.message.body.lyrics.lyrics_body
			})
			.catch(error => {
				console.error(error)
			})	
		}
	},
	created() {
		document.onmouseup = () => {
			if (window.getSelection().toString() != '') {
				console.log(window.getSelection().toString())		
			}
		}
	}
}
</script>