// Bomb Component Code Goes Here

import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }




  render() {
      let bomber = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    return (
      <div>{ bomber }</div>
    )
  }


}

export default Bomb;
