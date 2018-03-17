import { openOverlay, OVERLAYS, closeOverlay } from './router';
import { getIsFetching } from './user';
import { Keyboard } from 'react-native';

export default (store) => (next) => (action) => {
  const isFetching = getIsFetching(store.getState());
  const nextAction = next(action);
  if (getIsFetching(store.getState()) !== isFetching) {
    Keyboard.dismiss();
    if (!isFetching) {
      store.dispatch(openOverlay(OVERLAYS.LOADING));
    } else {
      store.dispatch(closeOverlay());
    }
  }

  return nextAction;
}
