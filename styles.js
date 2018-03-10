import { Platform, Dimensions } from 'react-native';
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
export const GRAY_LIGHT = '#F5F5F5';
export const GRAY_DARK = '#999';
export const BLUE = '#1C1258';
export const PINK = '#FE4D7A';
export const WHITE = '#fff';
export const YELLOW = '#FFE164';

export const HEADER_HEIGHT = 80;
export const BASE_SPACING = 15;
export const PAGE_TOP_PADDING = HEADER_HEIGHT + BASE_SPACING;
export const BASE_PADDING = { paddingHorizontal: BASE_SPACING };
export const SYSTEM_FONT = Platform.select({
  ios: { fontFamily: 'Helvetica' },
  android: { fontFamily: 'Roboto' },
});

export const INNER_WIDTH = WINDOW_WIDTH - (BASE_SPACING * 2);

export const BOLD = { fontWeight: '800' };
