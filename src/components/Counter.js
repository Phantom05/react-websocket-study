import React, { Component } from 'react';

class Counter extends Component {

  render() {
    const {number, increment, decrement} = this.props;
    return (
      <div>
        <div>
          <span>{number}</span>
        </div>
        <button onClick={increment} className="testButton">+</button>
        <button onClick={decrement} className="testButton">-</button>
      </div>
    );
  }
}

export default Counter;