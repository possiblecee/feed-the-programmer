import { NativeModules, Platform, AsyncStorage } from 'react-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import user, { isAuthenticated } from './user';
import router, { ROUTES, navigateTo } from './router';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { persistStore, autoRehydrate, persistReducer, createTransform } from 'redux-persist';
import errorMiddleware from './errorMiddleware';
import loaderMiddleware from './loaderMiddleware';

const { scriptURL } = NativeModules.SourceCode;
const address = scriptURL.split('://')[1].split('/')[0];
const hostname = address.split(':')[0];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const rootReducer = persistReducer(persistConfig, combineReducers({ user, router }));
const middlewares = [thunk, apiMiddleware, errorMiddleware, loaderMiddleware];

export default (onComplete) => {
  const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    devToolsEnhancer({
      name: Platform.OS,
      hostname,
      port: 5678,
      suppressConnectErrors: false,
    })
  ));

  persistStore(store, undefined, () => {
    if (isAuthenticated(store.getState())){
      store.dispatch(navigateTo(ROUTES.SCAN));
    }

    onComplete(store);
  });

};
