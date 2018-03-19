import { NativeModules, Platform, AsyncStorage } from 'react-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import user, { isAuthenticated } from './user';
import router, { ROUTES, navigateTo } from './router';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { persistStore, autoRehydrate, persistReducer } from 'redux-persist';
import errorMiddleware from './errorMiddleware';
import loaderMiddleware from './loaderMiddleware';
import { createLogger } from 'redux-logger';

const { scriptURL } = NativeModules.SourceCode;
const address = scriptURL.split('://')[1].split('/')[0];
const hostname = address.split(':')[0];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  debug: true
};

const rootReducer = persistReducer(persistConfig, combineReducers({ user, router }));
const middlewares = [thunk, apiMiddleware, errorMiddleware, loaderMiddleware];

if (__DEV__) {
  middlewares.push(createLogger({
    collapsed: true,
  }));
}

export default (onComplete) => {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  persistStore(store, undefined, () => {
    if (isAuthenticated(store.getState())){
      store.dispatch(navigateTo(ROUTES.SCAN));
    }

    onComplete(store);
  });

};
