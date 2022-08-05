import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../utility";

const CustomStatusBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back-sharp" color="#8A8A8A" size={28} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name="more-vertical" color="#8A8A8A" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 10,
    justifyContent: "center",
  },

  statusBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    // marginTop: 10,
  },

  // iconContainer: {
  //   paddingHorizontal: 9,
  //   paddingVertical: 4,
  //   backgroundColor: "#FAFAFA",
  //   borderRadius: 12,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
