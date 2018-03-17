import { StyleSheet } from 'react-native';
import { WHITE, GRAY_LIGHT } from '../styles';

export default StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  active: {
    backgroundColor: GRAY_LIGHT,
  },
});
