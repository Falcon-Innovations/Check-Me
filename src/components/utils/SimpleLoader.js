import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";
export default function SimpleLoader() {
  return (
    <View style={{ justifyContent: "center", alignSelf: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});
