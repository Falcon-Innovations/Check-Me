import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../utility";

const SocialButton = ({ onPress, icon, title, backgroundColor }) => {
  return (
    <View style={styles.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="transparent"
        onPress={onPress}
        style={styles.appButton}
        iconStyle={{ color: COLORS.primary }}
      >
        <Text style={styles.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  appButton: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,

    borderColor: COLORS.primary,
  },
  appButtonText: {
    fontSize: 15,
    fontFamily: "Poppins_Medium",
  },
  appButtonContainer: {
    paddingVertical: 6,
  },
});
