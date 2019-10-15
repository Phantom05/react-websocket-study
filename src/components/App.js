import React, { Component } from 'react';
import 'App.css';

import CounterContainer from 'containers/CounterContainer';
import ServerContainer from 'containers/ServerContainer';

import {Provider} from 'react-redux';
import store from 'store';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Provider store={store}>
            <CounterContainer />
            <ServerContainer/>
          </Provider>
        </header>
      </div>
    );
  }
}

export default App;