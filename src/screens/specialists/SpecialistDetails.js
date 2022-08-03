import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SpecialistDetails = ({ route }) => {
  const item = route.params;

  console.log("Data", item);
  return (
    <View>
      <Text>SpecialistDetails</Text>
    </View>
  );
};

export default SpecialistDetails;

const styles = StyleSheet.create({});
