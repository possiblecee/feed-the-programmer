import { StyleSheet } from 'react-native';
import { PINK, SYSTEM_FONT, BOLD, GRAY_DARK, BLUE, WHITE } from '../styles';

export default StyleSheet.create({
  root: {
    alignSelf: 'stretch',
    backgroundColor: BLUE,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    height: 60,
    alignSelf: 'stretch',
  },
  disabled: {
    height: 60,
    backgroundColor: GRAY_DARK,
  },
  label: {
    color: WHITE,
    fontSize: 24,
    ...BOLD,
    ...SYSTEM_FONT,
  },
});
