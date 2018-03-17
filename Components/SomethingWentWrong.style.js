import { StyleSheet } from 'react-native';
import { SYSTEM_FONT, ABSOLUTE } from '../styles';

export default StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    ...SYSTEM_FONT,
  },
  button: {
    ...ABSOLUTE,
    bottom: -40,
    left: -60,
    right: -60,
  },
});
