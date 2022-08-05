import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS } from "../../utility";

const PersonalDashboard = () => {
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Personal Dashboard"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text>PersonalDashboard</Text>
      </SafeAreaView>
    </>
  );
};

export default PersonalDashboard;

const styles = StyleSheet.create({});
