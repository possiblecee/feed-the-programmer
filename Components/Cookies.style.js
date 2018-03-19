import { StyleSheet } from 'react-native';
import {
  ABSOLUTE,
  WHITE,
  SYSTEM_FONT,
  GRAY_LIGHT,
  BASE_PADDING,
  PINK,
  BOLD,
  YELLOW,
  BASE_SPACING,
} from '../styles';

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    ...BASE_PADDING,
    paddingLeft: 5,
    backgroundColor: GRAY_LIGHT,
  },
  item: {
    width: 100,
    height: 126,
    borderWidth: 5,
    marginLeft: BASE_SPACING - 5,
    marginTop: BASE_SPACING - 5,
    borderColor: WHITE,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: PINK,
    color: WHITE,
    ...SYSTEM_FONT,
    ...BOLD,
    padding: 4,
  },
  badge: {
    ...SYSTEM_FONT,
    ...BOLD,
  },
  badgeWrapper: {
    ...ABSOLUTE,
    top: -10,
    right: -10,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: YELLOW,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
