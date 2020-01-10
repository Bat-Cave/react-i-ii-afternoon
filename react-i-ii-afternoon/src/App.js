import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Display from './Components/Display';


class App extends Component {
  

  render(){
    return (
      <div>
        <Header/>
        <div className='app-container'>
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
