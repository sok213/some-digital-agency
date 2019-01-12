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
	constructor() {
        super();

        this.state = {
            amountScrolled: window.pageYOffset
        }
    }

	componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ amountScrolled: window.pageYOffset });
    }
    
	render() {
		return (
			<div className="App">
				<NavBar />
				<Jumbotron />
				<div className={s.container}>
					<Purpose />
				</div>
				<Talent amountScrolled={this.state.amountScrolled}/>
			</div>
		);
	}
}

export default App;
