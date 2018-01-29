import React, { Component } from 'react';
//import './css/App.css';
import './sass/main.scss';
//import "./css/icon-font.css";
import Header from './Components/Header';
import GridTest from './Components/Grid-Test';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<GridTest />
			</div>
		);
	}
}

export default App;
