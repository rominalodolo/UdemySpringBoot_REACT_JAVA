import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';

import Counter from './components/counter/Counter';


// Function component 
// App is known as a parent component 
// Any javascript file is called a module 

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LearningComponents></LearningComponents>
        <Counter></Counter>
      </div>
    )
  }

}

class LearningComponents extends Component {
  render() {
    return (
      <div className='LearningComponents'>
        My Hello World 
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;