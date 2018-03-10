import { StyleSheet } from 'react-native';
import { GRAY_DARK, PINK, SYSTEM_FONT, BOLD, BASE_SPACING, WHITE, GRAY_LIGHT } from '../styles';

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
  wrapper: {
    paddingTop: 8,
    paddingBottom: 9,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  option: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: WHITE,
    borderWidth: 5,
    backgroundColor: GRAY_LIGHT,
  },
  selected: {
    borderColor: PINK,
  },
});
