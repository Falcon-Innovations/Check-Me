import { Dimensions } from "react-native";

const COLORS = {
  primary: "#FF6493",
  secondary: "",
  danger: "#FF0037",
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
