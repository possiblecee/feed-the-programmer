import { createReducer } from 'redux-create-reducer';
import { RSAA } from 'redux-api-middleware';
import config from '../config/config';

const { firebase, user } = config;
const SET_NICKNAME = 'USER/SET_NICKNAME';
const SET_EMAIL = 'USER/SET_EMAIL';
const SET_SYSTEM = 'USER/SET_SYSTEM';
const SET_COOKIE = 'USER/SET_COOKIE';
const USER_RESET = 'USER/RESET';

const AUTHENTICATE_START = 'USER/AUTHENTICATE_START';
const AUTHENTICATE_SUCCESS = 'USER/AUTHENTICATE_SUCCESS';
const AUTHENTICATE_FAIL = 'USER/AUTHENTICATE_FAIL';
const UPDATE_START = 'USER/UPDATE_START';
const UPDATE_SUCCESS = 'USER/UPDATE_SUCCESS';
const UPDATE_FAIL = 'USER/UPDATE_FAIL';

export const SUPPORTED_SYSTEMS = {
  WINDOWS: 'WINDOWS',
  LINUX: 'LINUX',
  APPLE: 'APPLE',
};

const COOKIE_TYPES = {
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
export const isAuthenticated = (state) => !!getUUID(state);

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

const initialState = {
  nickname: '',
  uuid: '',
  email: '',
  system: SUPPORTED_SYSTEMS.WINDOWS,
  foundStuff: [],
  isFetching: false,
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
    uuid: payload.UID,
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
});

export const authenticate = () => (dispatch, getState) => {
  const state = getState();

  const email = getEmail(state);
  const nick = getNickName(state);

  return dispatch({
    [RSAA]: {
      endpoint: firebase.authenticate,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        nick,
        start: new Date().getTime(),
      }),
      types: [
        AUTHENTICATE_START,
        AUTHENTICATE_SUCCESS,
        AUTHENTICATE_FAIL,
      ]
    }
  }).then(() => {
    const cookies = getCookies(getState());
    if (!cookies.length) {
      dispatch(setCookie(DEFAULT_COOKIE));
    }
    return dispatch(updateUser());
  })
};

const updateUser = () => (dispatch, getState) => {
  const state = getState();
  const uuid = getUUID(state);
  const system = getSystem(state);
  const found_stuff = getCookies(state);

  dispatch({
    [RSAA]: {
      endpoint: firebase.user.replace('{uuid}', uuid),
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system,
        found_stuff,
      }),
      types: [
        UPDATE_START,
        UPDATE_SUCCESS,
        UPDATE_FAIL,
      ]
    }
  });
};
