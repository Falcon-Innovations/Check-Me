import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS } from "../../utility";

const BlogDetails = ({ route }) => {
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Blog Details"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text>BlogDetails</Text>
      </SafeAreaView>
    </>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({});
