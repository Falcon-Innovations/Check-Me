import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../utility";

const AuthButton = ({ title, color, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  btnText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Lato_Bold",
  },
});
