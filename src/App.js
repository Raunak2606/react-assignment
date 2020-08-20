import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Resume from './components/resume.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Resume/>
      </div>
    );
  }
}

export default App;
