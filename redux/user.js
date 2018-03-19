import { createReducer } from 'redux-create-reducer';
import { RSAA } from 'redux-api-middleware';
import config from '../config/config';
import { camelizeKeys } from 'humps';

const { firebase, user } = config;
const SET_NICKNAME = 'USER/SET_NICKNAME';
const SET_EMAIL = 'USER/SET_EMAIL';
const SET_SYSTEM = 'USER/SET_SYSTEM';
const SET_COOKIE = 'USER/SET_COOKIE';
const USER_RESET = 'USER/RESET';

const AUTHENTICATE_START = 'USER/AUTHENTICATE_START';
const AUTHENTICATE_SUCCESS = 'USER/AUTHENTICATE_SUCCESS';
const AUTHENTICATE_ERROR = 'USER/AUTHENTICATE_ERROR';
const UPDATE_START = 'USER/UPDATE_START';
const UPDATE_SUCCESS = 'USER/UPDATE_SUCCESS';
const UPDATE_ERROR = 'USER/UPDATE_ERROR';
const FETCH_START = 'USER/FETCH_START';
const FETCH_SUCCESS = 'USER/FETCH_SUCCESS';
const FETCH_ERROR = 'USER/FETCH_ERROR';
const USER_DEATH = 'USER/DEATH';

export const FOOD_IMAGES = {
  COOKIE: require('../assets/cookie.png'),
  HONEY_POT: require('../assets/honeypot.png'),
  BEAN: require('../assets/bean.png'),
  CURRY: require('../assets/curry.png'),
  RASPBERRY: require('../assets/raspberry.png'),
};

export const FOOD_NAMES = {
  COOKIE: 'Cookie',
  HONEY_POT: 'Honey Pot',
  BEAN: 'Bean',
  CURRY: 'Curry',
  RASPBERRY: 'Raspberry',
};

export const SUPPORTED_SYSTEMS = {
  WINDOWS: 'WINDOWS',
  LINUX: 'LINUX',
  APPLE: 'APPLE',
};

export const COOKIE_TYPES = {
  DEFAULT: 'DEFAULT',
};

const DEFAULT_COOKIE = {
  type: COOKIE_TYPES.DEFAULT,
  value: user.LIFETIME,
};

export const getNickName = (state) => state.user.nickname;
export const getEmail = (state) => state.user.email;
export const getSystem = (state) => state.user.system;
export const getUUID = (state) => state.user.uuid;
export const getCookies = (state) => state.user.foundStuff;
export const getIsFetching = (state) => state.user.isFetching;
export const isAuthenticated = (state) => !!getUUID(state);
export const getUserIsAlive = (state) => !!state.user.isAlive;
export const getLastCookie = (state) => {
  const cookies = getCookies(state);
  const cookie = [...cookies].sort((a, b) => a.timestamp - b.timestamp).pop();

  return {
    ...cookie,
    kb: Math.floor((cookie.value / user.LIFETIME) * user.MAX_WEIGHT),
  };
}

export const setCookie = (payload) => (dispatch) => {
  dispatch({
    type: SET_COOKIE,
    payload,
  });

  setTimeout(() => {
    dispatch(updateUser());
  }, 500);
};

export const setNickName = (payload) => ({
  type: SET_NICKNAME,
  payload,
});

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setSystem = (payload) => ({
  type: SET_SYSTEM,
  payload,
});

export const setProgrammerDeath = (isAlive) => ({
  type: USER_DEATH,
  payload: isAlive,
});

const initialState = {
  nickname: '',
  uuid: '',
  email: '',
  system: SUPPORTED_SYSTEMS.WINDOWS,
  foundStuff: [],
  isFetching: false,
  isAlive: true,
};

export default createReducer(initialState, {
  [SET_SYSTEM]: (state, { payload: system }) => ({
    ...state,
    system,
  }),
  [SET_EMAIL]: (state, { payload: email }) => ({
    ...state,
    email,
  }),
  [SET_NICKNAME]: (state, { payload: nickname }) => ({
    ...state,
    nickname,
  }),
  [AUTHENTICATE_START]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [AUTHENTICATE_SUCCESS]: (state, { payload }) => ({
    ...state,
    email: payload.email,
    nickname: payload.nick,
    uuid: payload.uid,
    registeredAt: payload.start,
    isFetching: false,
  }),
  [SET_COOKIE]: (state, { payload }) => ({
    ...state,
    foundStuff: [
      ...state.foundStuff,
      {
        ...payload,
        timestamp: new Date().getTime(),
      },
    ],
  }),
  [USER_RESET]: () => ({ ...initialState }),
  [FETCH_START]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: true,
    ...camelizeKeys(payload),
  }),
  [USER_DEATH]: (state, { payload: isAlive }) => ({
    ...state,
    isAlive,
  }),
  'persist/REHYDRATE': (state, { payload = {} }) => ({
    ...initialState,
    ...state,
    ...payload.user,
    isFetching: false,
  })
});

export const authenticate = () => (dispatch, getState) => {
  const state = getState();

  const email = getEmail(state);
  const nickname = getNickName(state);
  const system = getSystem(state);

  return dispatch({
    [RSAA]: {
      endpoint: firebase.authenticate,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        nickname,
        system,
        start: new Date().getTime(),
      }),
      types: [
        AUTHENTICATE_START,
        AUTHENTICATE_SUCCESS,
        AUTHENTICATE_ERROR,
      ]
    }
  }).then(({ error }) => {

    return dispatch(fetchUser()).then(() => {
      const cookies = getCookies(getState());
      if (!cookies.length && !error) {
        dispatch(setCookie(DEFAULT_COOKIE));
      }

      return { success: !error };
    });
  })
};

const fetchUser = () => (dispatch, getState) => {
  const state = getState();
  const uuid = getUUID(state);

  return dispatch({
    [RSAA]: {
      endpoint: firebase.user.replace('{uuid}', uuid),
      method: 'GET',
      types: [
        FETCH_START,
        FETCH_SUCCESS,
        FETCH_ERROR,
      ]
    }
  });
};

const updateUser = () => (dispatch, getState) => {
  const state = getState();
  const uuid = getUUID(state);
  const found_stuff = getCookies(state);

  return dispatch({
    [RSAA]: {
      endpoint: firebase.user.replace('{uuid}', uuid),
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        found_stuff,
      }),
      types: [
        UPDATE_START,
        UPDATE_SUCCESS,
        UPDATE_ERROR,
      ]
    }
  });
};
