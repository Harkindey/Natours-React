import React, { Component } from 'react';
//import './css/App.css';
import './sass/main.scss';
//import "./css/icon-font.css";
import Header from './Components/Header';
// import GridTest from './Components/Grid-Test';
import About from './Components/About';
import Features from './Components/Features';
import Tours from './Components/Tours';
import Stories from './Components/Stories';
import Booking from './Components/Booking';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Popup from './Components/Popup';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Header />
				<About />
				<Features />
				<Tours />
				<Stories />
				<Booking />
				<Footer />
				<Popup />
				{/* <GridTest /> */}
			</div>
		);
	}
}

export default App;
