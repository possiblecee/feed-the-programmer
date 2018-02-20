/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import store from './redux';

export default class App extends Component<{}> {
  componentWillMount() {
    store.dispatch({ type: 'test' });
  }

  render() {
    return (
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={({ data }) => {
          store.dispatch({ type: 'food_discovered', payload: data });
          Alert.alert('Yeah!!!', `You found a ${data}`);
        }}
      />
    );
  }
}
