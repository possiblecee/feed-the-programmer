/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import Router from './Containers/Router';
import store from './redux';
/**
 *
 * <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={({ data }) => {
          store.dispatch({ type: 'food_discovered', payload: data });
          Alert.alert('Yeah!!!', `You found a ${data}`);
        }}
      />
*/

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
