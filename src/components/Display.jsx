import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="card-text">Durée : {this.props.timerValue}</p>
      </React.Fragment>
    );
  }
}

export default Display;