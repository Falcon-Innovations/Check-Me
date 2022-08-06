import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import Icons from "react-native-vector-icons/Ionicons";
import Run from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

import { Context as AuthContext } from "../../contexts/authContext";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, images, SIZES } from "../../utility";
import { Alert } from "react-native";

const PersonalDashboard = () => {
  const data = [
    {
      title: "Track my period",
      screen: "SetCycle",
      icon: <Icons name="ios-water" color="#fff" size={22} />,
    },
    {
      title: "Self-examine",
      screen: "SetCycle",
      icon: <Icons name="ios-flower" color="#fff" size={22} />,
    },
    {
      title: "Find exercises",
      screen: "SetCycle",
      icon: <Run name="running" color="#fff" size={22} />,
    },
    {
      title: "Talk to a doctor",
      screen: "SetCycle",
      icon: <FontAwesome name="stethoscope" color="#fff" size={22} />,
    },
  ];

  const { state, logout } = React.useContext(AuthContext);

  const navigation = useNavigation();
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Personal Dashboard"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 20 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <View style={{ marginRight: 15 }}>
              <View
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "#ECECEC",
                  borderRadius: 70,
                }}
              >
                <View style={[styles.image, styles.shadowProp]}>
                  <Image
                    source={images.doc2}
                    style={{ height: 65, width: 65, borderRadius: 25 }}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={{ fontFamily: "Poppins_Medium", fontSize: 16 }}>
                {state?.user?.name}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_Regular",
                  fontSize: 12,
                  color: "#AEADAD",
                  marginTop: 2,
                }}
              >
                {state?.user?.email}
              </Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 5, marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                name="target"
                size={28}
                color={COLORS.primary}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontFamily: "Poppins_Medium",
                  fontSize: 17,
                  color: COLORS.textColor,
                }}
              >
                Health
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                alignSelf: "center",
                paddingTop: 12,
                paddingBottom: SIZES.screenHeight * 0.03,
                justifyContent: "center",
                alignSelf: "flex-start",
              }}
            >
              {data.map((item) => (
                <View
                  key={item.title}
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    backgroundColor: "transparent",
                    marginHorizontal: SIZES.screenWidth * 0.01,
                    borderRadius: 6,
                    width: "45%",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <View
                    style={{
                      height: 45,
                      width: 45,
                      borderRadius: 45,
                      backgroundColor: COLORS.primary,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </View>
                  <Text
                    style={{
                      fontFamily: "Poppins_Regular",
                      fontSize: 14,
                      color: COLORS.textColor,
                      marginTop: 18,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PersonalDashboard;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    backgroundColor: "transparent",
    height: 65,
    width: 65,
    borderRadius: 25,
    position: "absolute",
    bottom: 10,
    right: 8,
  },
});
