import React, { Component } from 'react';
import './lamp.css'    

class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true,
      off: false
    };
  }
  
  
  handleClick = () => {
    this.setState({ on: !this.state.on });
    
  };

  
  render() {
    const lightOn = this.state.on ? 'at work' : 'at sleep';
    return (
      <div>
        <button onClick={this.handleClick}
         className={lightOn}>{lightOn.toUpperCase()}</button>
        <figure className={lightOn} />
      </div>
    );
  }
}

export default Lamp;