import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5/sketch'
// var P5Wrapper = require('react-p5-wrapper');

class Play extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">This will be the game play</h1>
        <P5Wrapper sketch={sketch} rotation={50} />
      </div>
    );
  }
}
export default Play;