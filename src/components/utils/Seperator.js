import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../utility";

const Seperator = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.darkGrey,
          height: 2,
          flex: 1,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          alignSelf: "center",
          paddingHorizontal: 5,
          fontSize: 16,
          color: COLORS.lightTextGrey,
          fontFamily: "Poppins_Regular",
        }}
      >
        OR
      </Text>
      <View
        style={{
          backgroundColor: COLORS.darkGrey,
          height: 2,
          flex: 1,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default Seperator;
