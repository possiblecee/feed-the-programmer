import { StyleSheet } from 'react-native';
import { BASE_PADDING, BASE_SPACING, GRAY_LIGHT, WINDOW_HEIGHT } from '../styles';

export default StyleSheet.create({
  root: {
    flex: 1,
    ...BASE_PADDING,
    backgroundColor: GRAY_LIGHT,
    height: WINDOW_HEIGHT,
  },
  child: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: BASE_SPACING,
    left: 0,
    right: 0,
  }
});
