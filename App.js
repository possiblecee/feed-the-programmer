/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Containers/Router';
import createStore from './redux';

console.disableYellowBox = true;

class App extends Component {
  state = {
    store: createStore((store) => {
      this.setState({ store });
    })
  };

  render() {
    if (!this.state.store) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
