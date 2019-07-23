import React, { Component } from 'react';

import { toast } from "react-toastify";

import ButtonGroup from './ButtonGroup';
import Display from './Display';
import Message from './Message';

class Timer extends Component {
  state = {
    initialValue: 10,  
    duration: 10,
    handle: 0,
    message: 'Prêt pour le compte à rebours'
  };

  count = () => {
    this.setState({
        duration: parseInt(this.state.duration, 10) -1
    });
    if(this.state.duration === 0) {
      this.clean();
      this.setState({
        duration: this.state.initialValue
      });
    }
  };

  clean = (message = 'Compte à rebours réinitialisé') => {
    clearInterval(this.state.handle);   
    this.setState({
      message: message
    })
  }

  notify = (text, type) => {
    toast[type](text, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    });
  };

    start = () => {
        const handle = setInterval(() => {
          this.count();
        }, 1000);

    this.setState({
      handle: handle,
      message :'Compte à rebours lancer'
    });
  }

  stop = () => {
    this.clean('Arrêt du compte à rebours');
    this.notify('en pause', 'success');
  }

  reset = () => {
    this.clean();
    this.setState({
      duration: this.state.initialValue
    });
    this.notify('réinitialisation', 'error');
  } 

  componentDidMount() {
    this.setState({
        initialValue: parseInt(this.props.duration, 10) * 60,
        duration: parseInt(this.props.duration, 10) * 60,
    })
    }

  componentWillUnmount() {
    this.clean();
  }

  prependZero = value => {
      return value < 10 ? "0" + value.toString() : value.toString(); 
  }

  formatDuration = () => {
    const minutes = Math.floor(this.state.duration / 60);
    const seconds = Math.floor(this.state.duration % 60);
    return `${this.prependZero(minutes)}:${this.prependZero(seconds)}`;
   }

  render() { 
    return (
        <div className="container p-3">
            <div className="card">
            <div className="card-header">
                {this.props.title}
            </div>
            <div className="card-body">
            <Message text={this.state.message} delay={2500}/>
                <Display title={this.props.title} timerValue={this.formatDuration()} />
                    <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset}/>
            </div>
            </div>
        </div>
    );
  }
}

export default Timer;