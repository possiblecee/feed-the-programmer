import { createReducer } from 'redux-create-reducer';

export const ROUTES = {
  ONBOARDING: 'ONBOARDING',
  SCAN: 'SCAN',
  PROFILE: 'PROFILE',
};

const NAVIGATE_TO = 'ROUTER/NAVIGATE_TO';

export const navigateTo = (route) => ({
  type: NAVIGATE_TO,
  payload: route,
});

export const getRoute = (state) => state.router.current;

const initialState = {
  current: ROUTES.ONBOARDING,
};

export default createReducer(initialState, {
  [NAVIGATE_TO]: (state, { payload: current }) => ({
    current,
  }),
});
