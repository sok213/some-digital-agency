import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import OurStory from './components/OurStory/OurStory';
import Expertise from './components/Expertise/Expertise';
import HeadQuarters from './components/HeadQuarters/HeadQuarters';
import Testimonials from './components/Testimonials/Testimonials';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Jumbotron />
				<OurStory />
				<Expertise />
				<Footer />
				<HeadQuarters />
			</div>
		);
	}
}

export default App;
