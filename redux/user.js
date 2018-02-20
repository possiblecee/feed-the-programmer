import { createReducer } from 'redux-create-reducer';

const initialState = {
  nickname: '',
  uuid: '',
  email: '',
};

export default createReducer(initialState, {});
