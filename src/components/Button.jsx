import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button onClick={this.props.onBtnClick} type="button" className={this.props.btnClasses}>{this.props.text}</button>
         );
    }
}
 
export default Button;