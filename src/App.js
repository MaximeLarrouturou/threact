import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div>
      <ToastContainer />  
      <Timer duration="25" title="Pomodoro"/>
      <Timer duration="5" title="Courte pause"/>
      <Timer duration="10" title="Longue pause"/>
      </div>
    );
  }
}

export default App;