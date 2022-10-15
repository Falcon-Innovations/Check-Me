import { Dimensions } from "react-native";

const COLORS = {
  primary: "#F7007D",
  secondary: "#E9EEF7",
  textColor: "#2A2A2A",
  danger: "#FF0037",
  borderColor: "#DBD9D9",
  borderCardColor: "#F39FCA",
  borderColorFocused: "#7C7C7C",
  white: "#FFFFFF",
  black: "#000000",
};

const SIZES = {
  borderRadius: 12,
  borderRadiusSmall: 4,
  borderRadiusMedium: 8,
  borderRadiusLarge: 16,

  authIconSizes: 24,

  screenWidth: Dimensions.get("window").width,
  screenHeight: Dimensions.get("window").height,
};

export { COLORS, SIZES };
