import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Bot from './components/Bot/Bot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bot />
      </div>
    );
  }
}

export default App;
