import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import { COLORS } from "../../utility";

const AppButton = ({ text, color, onPress }) => {
  return (
    <Button
      onPress={onPress}
      uppercase={false}
      labelStyle={{
        color: "#fff",
        fontFamily: "Lato_Black",
        justifyContent: "center",
      }}
      mode="contained"
      style={{
        height: 45,
        width: "100%",
        alignItems: "center",
        paddingTop: 2,
      }}
      theme={{ colors: { primary: color } }}
    >
      {text}
    </Button>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
