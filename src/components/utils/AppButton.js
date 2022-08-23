import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import { COLORS } from "../../utility";

const AppButton = ({ text, color, onPress, ...rest }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Button
        onPress={onPress}
        uppercase={false}
        labelStyle={{
          color: "#fff",
          fontFamily: "Poppins_Medium",
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
        {...rest}
      >
        {text}
      </Button>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
