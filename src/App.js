import React, { Component } from 'react';
import './App.css';
import Header from './js/component/Header';
import TraverseContent from './js/component/TraverseContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TraverseContent />
      </div>
    );
  }
}

export default App;
