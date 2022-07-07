import { Dimensions } from 'react-native';

const COLORS = {
  primaryGreen: '#1BA45C',
  PrimaryYellow: '#FFA412',
  lightGreen: '#CDEEDD',
  grey: '#7C7C7C',
  textInputColor: '#FBFBFB',
  lightTextGrey: '#AFAFAF',
  textgrey: '#2C2C2C',
  lightGrey: '#C4C4C4',
  darkGrey: '#C4C4C4',
  bgColor: '#F7F9F6',
  pinTextColor: '#848282',
  red: '#D34E4E',
  white: '#FFF',
  iconColor: '#5C5C5C',
  yellow: '#FFA412',
  bckBtnColor: '#707070',
  viewColor: '#DEDEDE',
};

const SIZES = {
  borderRadius: 12,
  borderRadiusSmall: 4,
  borderRadiusMedium: 8,
  borderRadiusLarge: 16,

  authIconSizes: 24,

  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
};

export { COLORS, SIZES };
