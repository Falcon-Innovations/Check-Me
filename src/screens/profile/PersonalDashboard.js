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
import React, { useEffect } from "react";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import Icons from "react-native-vector-icons/Ionicons";
import ProfileIcon from "react-native-vector-icons/AntDesign";
import Run from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { Context as AuthContext } from "../../contexts/userContext";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, config, images, SIZES } from "../../utility";
import { Alert } from "react-native";
import useDataFetching from "../../hooks/useFetchData";
import SimpleLoader from "../../components/utils/SimpleLoader";
import Error from "../../components/utils/Error";

const PersonalDashboard = () => {
  const { t } = useTranslation();

  const [loading, error, user, fetchData] = useDataFetching(
    `${config.app.api_url}/users/me`
  );

  useEffect(() => {
    const updateData = navigation.addListener("focus", () => {
      fetchData();
    });
    return updateData;
  }, [navigation]);

  const data = [
    {
      title: "Track my period",
      screen: "MenstraulCycle",
      icon: <Icons name="ios-water" color="#fff" size={22} />,
    },
    {
      title: "Self-examine",
      screen: "SelfExamination",
      icon: <Icons name="ios-flower" color="#fff" size={22} />,
    },
    {
      title: "Find a Hospital",
      screen: "Hospitals",
      icon: <FontAwesome name="hospital-o" color="#fff" size={22} />,
    },
    {
      title: "Talk to a doctor",
      screen: "Specialists",
      icon: <FontAwesome name="stethoscope" color="#fff" size={22} />,
    },
  ];

  const cycle = [
    {
      days: `${user?.data?.doc?.menstrualCycleInfo?.daysBledCount.toFixed(1)}`,
      icon: <Icons name="ios-water" color="#fff" size={20} />,
      desc: "Average Period",
    },
    {
      days: `${user?.data?.doc?.menstrualCycleInfo?.dayCount.toFixed(1)}`,
      icon: <Icons name="ios-sync" color="#fff" size={20} />,
      desc: "Average Cycle",
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
                  {state?.user?.avatar ? (
                    <Image
                      source={{
                        uri: state?.user?.avatar,
                      }}
                      style={{ height: 65, width: 65, borderRadius: 25 }}
                    />
                  ) : (
                    <ProfileIcon
                      name="user"
                      size={40}
                      color={COLORS.primary}
                      style={{
                        position: "absolute",
                        left: SIZES.screenWidth * 0.05,
                        top: SIZES.screenHeight * 0.02,
                      }}
                    />
                  )}
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.screen)}
                  activeOpacity={0.5}
                  key={item.title}
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: SIZES.screenHeight * 0.04,
                    backgroundColor: "transparent",
                    marginHorizontal: SIZES.screenWidth * 0.02,
                    borderRadius: 6,
                    width: "45%",
                    alignItems: "center",
                    marginBottom: 20,
                    borderWidth: 1,
                    borderColor: "#F39FCA",
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
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ paddingHorizontal: 5, marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icons
                name="md-flower-outline"
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
                My cycle
              </Text>
            </View>
            {loading || error ? (
              <>
                {loading === true && (
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <SimpleLoader />
                  </View>
                )}
                {error && (
                  <View
                    style={{
                      margin: 20,
                      backgroundColor: COLORS.danger,
                      borderRadius: 8,
                      paddingLeft: 10,
                    }}
                  >
                    <Error error={error} />
                  </View>
                )}
              </>
            ) : (
              <>
                {!user?.data?.doc?.menstrualCycleInfo ? (
                  <View>
                    <Text>You have not set your cycle</Text>
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: SIZES.screenHeight * 0.05,
                    }}
                  >
                    {cycle.map((cy) => (
                      <View
                        key={cy.days}
                        style={{
                          paddingHorizontal: 8,
                          paddingVertical: 8,
                          backgroundColor: "#FFECE9",
                          marginHorizontal: SIZES.screenWidth * 0.03,
                          borderRadius: 6,
                          width: "43%",

                          marginBottom: 20,
                        }}
                      >
                        <View
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,

                            backgroundColor: COLORS.primary,
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "flex-end",
                          }}
                        >
                          {cy.icon}
                        </View>
                        <View style={{ paddingLeft: 6, paddingBottom: 4 }}>
                          <Text
                            style={{
                              fontFamily: "Poppins_Medium",
                              fontSize: 16,
                              color: COLORS.textColor,
                            }}
                          >
                            {cy.days > 0
                              ? `${cy.days} Days`
                              : `${cy.days} Days`}
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Poppins_Regular",
                              fontSize: 11,
                              color: COLORS.textColor,
                            }}
                          >
                            {cy.desc}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </>
            )}
          </View>
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
