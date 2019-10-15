import React, { Component } from 'react';
import Counter from 'components/Counter';
import {connect} from 'react-redux';
import {CounterActions} from 'store/actionCreators';

// import ServerConnect from 'ServerConnect';

class ServerContainer extends Component {


  render() {
    const {number} = this.props;
    return (
      <div>
        {/* <ServerConnect /> */}
      </div>
    );
  }
}

export default connect(
  (state)=>({
    number:state.counter.number
  })
)(ServerContainer);