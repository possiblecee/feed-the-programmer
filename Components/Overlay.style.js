import { StyleSheet } from 'react-native';
import { ABSOLUTE, BLACK_20, WHITE } from '../styles';

export default StyleSheet.create({
  root: {
    ...ABSOLUTE,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: BLACK_20,
    justifyContent: 'center',
  },
  overlay: {
    padding: 40,
    paddingHorizontal: 60,
    backgroundColor: WHITE,
    alignSelf: 'center',
  },
});
