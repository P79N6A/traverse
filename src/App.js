import React, { Component } from 'react';
import './App.css';
import Header from './js/component/Header';
import TraverseContent from './js/component/TraverseContent';
import Button from 'antd/lib/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TraverseContent />      
        <Button type="primary">Ant Design</Button>

      </div>
      
    );
  }
}

export default App;
