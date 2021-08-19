import React, { Component } from 'react';
import s from './App.module.scss';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import Talent from './components/Talent/Talent';
import Footer from './components/Footer/Footer';
import Purpose from './components/Purpose/Purpose';
import Testimonials from './components/Testimonials/Testimonials';
import HeadQuarters from './components/HeadQuarters/HeadQuarters';
import { Element } from 'react-scroll';


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

				<Element name="purpose">
					<div className={s.container}>
						<Purpose />
					</div>
				</Element>

				<Element name="talent">
					<Talent amountScrolled={this.state.amountScrolled} />
				</Element>

				<Element name="impact">
					<div className={s.container}>
						<Testimonials amountScrolled={this.state.amountScrolled} />
					</div>
				</Element>

				<Element name="hq">
					<HeadQuarters amountScrolled={this.state.amountScrolled} />
				</Element>

				<Footer amountScrolled={this.state.amountScrolled} />
			</div>
		);
	}
}

export default App;
