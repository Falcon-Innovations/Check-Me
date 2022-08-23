import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS } from "../../utility";

const settings = [
  {
    title: "Reset Password",
    screen: "ResetPassword",
  },
  {
    title: "Change Language",
    screen: "PersonalDashboard",
  },
];
const Settings = () => {
  const navigation = useNavigation();

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"settings"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={{ marginHorizontal: 15, paddingVertical: 20 }}>
          <View>
            {settings.map((setting) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(setting.screen)}
                key={setting.title}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#F1B9D6",
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontFamily: "Poppins_Regular", fontSize: 14 }}>
                    {setting.title}
                  </Text>
                  <Icon
                    name="md-chevron-forward-sharp"
                    size={28}
                    color={"#8A8A8A"}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({});
