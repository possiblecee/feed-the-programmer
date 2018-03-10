import { StyleSheet } from 'react-native';
import { GRAY_DARK, PINK, SYSTEM_FONT, BOLD, BLUE, BASE_SPACING } from '../styles';

export default StyleSheet.create({
  root: {
    alignSelf: 'stretch',
    marginBottom: BASE_SPACING * 2,
  },
  label: {
    color: GRAY_DARK,
    fontSize: 16,
    ...BOLD,
    ...SYSTEM_FONT,
  },
  input: {
    color: BLUE,
    paddingTop: 8,
    paddingBottom: 9,
    borderBottomWidth: 2,
    borderBottomColor: PINK,
    marginBottom: 10,
    ...BOLD,
    ...SYSTEM_FONT,
  },
});
