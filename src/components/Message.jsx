import React from "react";

class Message extends React.Component  {

  render() {
    return (        
        <h5 className="card-title">{this.props.text}</h5>
    );
  }


};

export default Message