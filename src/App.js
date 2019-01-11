import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import ActiveSection from './components/ActiveSection/ActiveSection';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <NavBar />
        <ActiveSection />
        <Footer />
      </div>
    );
  }
}

export default App;
