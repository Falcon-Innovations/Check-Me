import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS } from "../../utility";

const Notifications = () => {
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Notifications"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={{ marginHorizontal: 15 }}>
          <Text>Notifications here</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
