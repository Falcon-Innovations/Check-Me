import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const CustomStatusBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconContainer}
      >
        <Icon name="ios-arrow-back-sharp" color="#8A8A8A" size={28} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 8, backgroundColor: "#FAFAFA", borderRadius: 12 }}
      >
        <Icons name="more-vertical" color="#8A8A8A" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },

  iconContainer: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
