import { createReducer } from 'redux-create-reducer';

export const ROUTES = {
  ONBOARDING: 'ONBOARDING',
  SCAN: 'SCAN',
  COOKIES: 'COOKIES',
};

export const OVERLAYS = {
  YOU_FOUND_IT: 'YOU_FOUND_IT',
  ALREADY_FOUND_IT: 'ALREADY_FOUND_IT',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
};

const NAVIGATE_TO = 'ROUTER/NAVIGATE_TO';
const OPEN_OVERLAY = 'ROUTER/OPEN_OVERLAY';
const CLOSE_OVERLAY = 'ROUTER/CLOSE_OVERLAY';

export const navigateTo = (route) => ({
  type: NAVIGATE_TO,
  payload: route,
});

export const openOverlay = (route) => ({
  type: OPEN_OVERLAY,
  payload: route,
});

export const closeOverlay = () => ({
  type: CLOSE_OVERLAY,
});

export const getRoute = (state) => state.router.current;
export const getOverlay = (state) => state.router.overlay;

const initialState = {
  current: ROUTES.ONBOARDING,
  overlay: null,
};

export default createReducer(initialState, {
  [NAVIGATE_TO]: (state, { payload: current }) => ({
    current,
  }),
  [OPEN_OVERLAY]: (state, { payload: overlay }) => ({
    ...state,
    overlay,
  }),
  [CLOSE_OVERLAY]: (state) => ({
    ...state,
    overlay: null,
  }),
});
