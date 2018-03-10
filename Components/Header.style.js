import { StyleSheet } from 'react-native';
import {
  HEADER_HEIGHT,
  WHITE,
  BASE_PADDING,
  BASE_SPACING,
  PINK,
  WINDOW_WIDTH,
  YELLOW,
  BLUE,
  BOLD,
  SYSTEM_FONT,
} from '../styles';

const HEALTH_MONITOR_PADDING = 2;
export const HEALTH_MONITOR_MAX_WIDTH = WINDOW_WIDTH - (BASE_SPACING * 2) - (HEALTH_MONITOR_PADDING * 2);

export default StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: WHITE,
    ...BASE_PADDING,
    paddingBottom: BASE_SPACING,
    justifyContent: 'flex-end',
  },
  healthMonitorContainer: {
    alignSelf: 'stretch',
  },
  healthMonitor: {
    alignSelf: 'stretch',
    height: 15,
    backgroundColor: PINK,
  },
  healthMonitorStatus: {
    height: 8,
    width: 10,
    backgroundColor: YELLOW,
    marginTop: HEALTH_MONITOR_PADDING,
    marginLeft: HEALTH_MONITOR_PADDING,
  },
  currentWeight: {
    fontSize: 14,
    color: BLUE,
    ...SYSTEM_FONT,
    ...BOLD,
  },
  weightWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: 4,
  },
});
