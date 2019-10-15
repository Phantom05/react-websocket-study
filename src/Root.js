import React, { Component } from 'react';
import App from 'components/App';
import ServerConnect from './ServerConnect';

class Root extends Component {
  render() {
    // ServerConnect()
    return (
      <div>
        <App/>
      </div>
    );
  }
}

export default Root;