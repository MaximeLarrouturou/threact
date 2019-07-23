import React, { Component } from 'react';
import Button from './Button';

class ButtonGroup extends Component {
    render() { 
        return ( 
            <div className="btn-group" role="group" aria-label="Basic example">
                <Button text="Start" onBtnClick={this.props.onStart} btnClasses="btn btn-success"/>
                <Button text="Stop" onBtnClick={this.props.onStop} btnClasses="btn btn-danger ml-2"/>
                <Button text="Reset" onBtnClick={this.props.onReset} btnClasses="btn btn-secondary ml-2"/>
            </div>
         );
    }
}
 
export default ButtonGroup;