import { Dimensions } from "react-native";

const COLORS = {
  primary: "#F7007D",
  secondary: "",
  danger: "#FF0037",
  borderColor: "#DBD9D9",
  borderColorFocused: "#7C7C7C",
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
