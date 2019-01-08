import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';

class Search extends Component {
	constructor(props) {
		super(props);
		// const TOKEN = 'APAXUcA2yL76OQNZedtrYNt2btdbMMofRI56szmzuPMITkYy_-vKEAyVu_F7x7jM';
		this.state = {

		};
	}
    // genius() {
    //     const URL = 'https://api.genius.com/${path}';
    //     const HEADERS = {
    //     	Authorization: `Bearer ${this.TOKEN}`
    //     };
    //     const BODY = fetch(URL, { HEADERS });
    //     const RESULT = BODY.json();

    //     if (RESULT.error)
    //     	throw new Error(`${RESULT.error}: ${RESULT.error_description}`);
    //     if (RESULT.meta.status !== 200)
    //     	throw new Error(`${RESULT.meta.status}: ${RESULT.meta.message}`);
    // }

    render() {
        return (
            <div className="search">
                <h1>Search</h1>
                <input type="text" placeholder="What's your favorite song?" />
            </div>
        )
    }
}

export default Search;