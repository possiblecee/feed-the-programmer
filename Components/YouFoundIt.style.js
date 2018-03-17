import { StyleSheet } from 'react-native';
import { ABSOLUTE, BLACK_20, WHITE, SYSTEM_FONT, GRAY_DARK } from '../styles';

export default StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 30,
  },
  text: {
    textAlign: 'center',
    ...SYSTEM_FONT,
    marginBottom: 10,
  },
  subText: {
    textAlign: 'center',
    color: GRAY_DARK,
    ...SYSTEM_FONT,
  },
  button: {
    ...ABSOLUTE,
    bottom: -40,
    left: -60,
    right: -60,
  },
});
