import React, { Component } from 'react';
import GeneratePassword from './components/GeneratePassword';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GeneratePassword />
			</div>
		);
	}
}

export default App;
