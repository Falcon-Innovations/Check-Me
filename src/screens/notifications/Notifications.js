import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS } from "../../utility";

const Notifications = () => {
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Self Examination"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          <Text>Helloo</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
