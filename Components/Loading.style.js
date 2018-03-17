import { StyleSheet } from 'react-native';
import { ABSOLUTE, WINDOW_WIDTH, WINDOW_HEIGHT, SYSTEM_FONT, BOLD, BLUE } from '../styles';

export default StyleSheet.create({
  root: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    justifyContent: 'flex-start',
  },
  image: {
    alignSelf: 'center',
    marginTop: 150,
  },
  text: {
    ...ABSOLUTE,
    left: 0,
    right: 0,
    bottom: 80,
    color: BLUE,
    fontSize: 20,
    ...SYSTEM_FONT,
    ...BOLD,
    textAlign: 'center',
  },
});
