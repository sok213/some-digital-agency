import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import ActiveSection from './components/ActiveSection/ActiveSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <NavBar />
        <ActiveSection />
      </div>
    );
  }
}

export default App;
