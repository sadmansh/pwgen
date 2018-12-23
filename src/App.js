import React, { Component } from 'react';
import './App.css';
import SearchSong from './components/SearchSong';
import GeneratePassword from './components/GeneratePassword';

class App extends Component {
  render() {
	return (
		<div className="App">
			<SearchSong />
			<GeneratePassword />
		</div>
	);
  }
}

export default App;
