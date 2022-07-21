import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import FirstComponent from './components /learning-examples/FirstComponent';
import SecondComponent from './components /learning-examples/SecondComponent';
import ThirdComponent from './components /learning-examples/ThirdComponent';


// Function component 
// App is known as a parent component 
// Any javascript file is called a module 

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World 
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
      </div>
    );
  }
}
export default App;