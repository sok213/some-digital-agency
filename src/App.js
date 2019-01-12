import React, { Component } from 'react';
import s from './App.module.scss';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import Talent from './components/Talent/Talent';
import Footer from './components/Footer/Footer';
import Purpose from './components/Purpose/Purpose';
import Expertise from './components/Expertise/Expertise';
import HeadQuarters from './components/HeadQuarters/HeadQuarters';
import * as Scroll from 'react-scroll';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Jumbotron />
				<div className={s.container}>
					<Purpose />
					<Talent />
					{/*
						<Footer />
						<HeadQuarters /> 
					*/}
				</div>
			</div>
		);
	}
}

export default App;
