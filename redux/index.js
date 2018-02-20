import { NativeModules, Platform } from 'react-native';
import { createStore, combineReducers } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import user from './user';

const { scriptURL } = NativeModules.SourceCode;
const address = scriptURL.split('://')[1].split('/')[0];
const hostname = address.split(':')[0];

const rootReducer = combineReducers([user]);

export default createStore(rootReducer, devToolsEnhancer({
  name: Platform.OS,
  hostname,
  port: 5678,
  suppressConnectErrors: false,
}));
