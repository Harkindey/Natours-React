import React, { Component } from 'react';
//import './css/App.css';
import './sass/main.scss';
//import "./css/icon-font.css";
import Header from './Components/Header';
import GridTest from './Components/Grid-Test';
import About from './Components/About';
import Features from './Components/Features';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<About />
					<Features />
				</main>
				{/* <GridTest /> */}
			</div>
		);
	}
}

export default App;
