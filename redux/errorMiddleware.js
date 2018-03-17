import { openOverlay, OVERLAYS } from './router';

export default (store) => (next) => (action) => {
  if (/ERROR/.test(action.type)) {
    store.dispatch(openOverlay(OVERLAYS.ERROR));
  }
  return next(action);
}
