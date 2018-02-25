import { createReducer } from 'redux-create-reducer';

export const getNickName = (state) => state.user.nickname;
export const getEmail = (state) => state.user.email;

const initialState = {
  nickname: '',
  uuid: '',
  email: '',
};

export default createReducer(initialState, {});
