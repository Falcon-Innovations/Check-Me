import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS } from "../../utility";

const SelfExamination = () => {
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Self Examination"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          <Text>SelfExamination</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SelfExamination;

const styles = StyleSheet.create({});
