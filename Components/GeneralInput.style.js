import { StyleSheet } from 'react-native';
import { GRAY_DARK, PINK } from '../styles';

export default StyleSheet.create({
  root: {
    alignSelf: 'stretch',
  },
  label: {
    color: GRAY_DARK,
  },
  input: {
    color: GRAY_DARK,
    borderBottomWidth: 2,
    borderBottomColor: PINK,
  },
});
