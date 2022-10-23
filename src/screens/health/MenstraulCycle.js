import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import Edit from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Icons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

import { Context as UserContext } from "../../contexts/userContext";
import { AppButton, AppStatusBar, Input } from "../../components";
import { COLORS, config, images, SIZES } from "../../utility";
import useDataFetching from "../../hooks/useFetchData";
import SimpleLoader from "../../components/utils/SimpleLoader";
import Error from "../../components/utils/Error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const MenstraulCycle = () => {
  const navigation = useNavigation();
  const [load, setLoad] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [loading, error, user, fetchData] = useDataFetching(
    `${config.app.api_url}/users/me`
  );
  useEffect(() => {
    const updateData = navigation.addListener("focus", () => {
      fetchData();
    });
    return updateData;
  }, [navigation]);

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

  const infoUserCycle = user?.data?.doc?.menstrualCycleInfo?.dayCount;

  const infoUserPeriod = user?.data?.doc?.menstrualCycleInfo?.daysBledCount;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [num, setNum] = useState("");
  const [numP, setNumP] = useState("");

  //Update cycle
  const updateMentrualCycle = async () => {
    setLoad(true);

    const token = await AsyncStorage.getItem("token");

    let data = {
      dayCount: parseInt(num),
      daysBledCount: parseInt(numP),
    };
    const configurationData = {
      method: "PATCH",
      url: `${config.app.api_url}/users/updateMenstrualCycle`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    await axios(configurationData)
      .then((response) => {
        if (response.data.status === "success") {
          setLoad(false);
          Alert.alert("success", "Cycle set Successfully", [
            // {
            //   title: "Ok",
            //   onPress: () => {
            //     navigation.goBack();
            //   },
            // },
          ]);
        }
      })
      .catch((error) => {
        setLoad(false);
        console.error("Book Error", error);
      });
  };

  //delete

  const deleteMentrualCycle = async () => {
    setLoad(true);

    const token = await AsyncStorage.getItem("token");

    let data = {
      dayCount: numOfDays,
      daysBledCount: parseInt(period),
      description: message,
    };
    const configurationData = {
      method: "PATCH",
      url: `${config.app.api_url}/users/updateMenstrualCycle`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    await axios(configurationData)
      .then((response) => {
        if (response.data.status === "success") {
          setLoad(false);
          Alert.alert("success", "Cycle set Successfully", [
            {
              title: "Ok",
              onPress: () => {
                navigation.goBack();
              },
            },
          ]);
        }
      })
      .catch((error) => {
        setLoad(false);
        console.error("Book Error", error);
      });
  };

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View
        style={{
          height: SIZES.screenHeight * 0.09,
          width: "100%",
          backgroundColor: COLORS.primary,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Icon
            name="arrow-back-ios"
            size={25}
            color="#fff"
            style={{ marginLeft: 16 }}
          />
          <Text
            style={{
              justifyContent: "center",
              fontSize: 18,
              fontFamily: "Poppins_Medium",
              color: "#fff",
              marginLeft: SIZES.screenWidth * 0.25,
            }}
          >
            Your Cycles
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          contentContainerStyle={{ marginHorizontal: 14, paddingVertical: 18 }}
        >
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
                <View
                  style={{
                    justifyContent: "center",
                    marginTop: SIZES.screenHeight * 0.1,
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{
                        uri: "https://res.cloudinary.com/dav5lnlxj/image/upload/v1665910051/menstrualCycle_nin7zm.png",
                      }}
                      style={{
                        width: SIZES.screenWidth * 0.4,
                        height: SIZES.screenHeight * 0.15,
                      }}
                    />
                  </View>
                  <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <Text
                      style={{
                        fontFamily: "Poppins_Regular",
                        fontSize: 14,
                        textAlign: "center",
                      }}
                    >
                      You have no cycles, please add one. Keep track of your
                      period and cycle today and lets help you live a healthy
                      life
                    </Text>
                  </View>
                  <View style={{ marginTop: SIZES.screenHeight * 0.05 }}>
                    <AppButton
                      text="Add Cycle"
                      color={COLORS.primary}
                      onPress={() => navigation.navigate("SetCycle")}
                    />
                  </View>
                </View>
              ) : (
                <View style={{ marginTop: 4 }}>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{ fontFamily: "Poppins_Regular", fontSize: 12 }}
                    >
                      Current Cycle
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins_Medium",
                        fontSize: 16,
                        marginTop: 6,
                      }}
                    >
                      {/* Started 4 September (15 Days) */}
                      You have
                    </Text>
                  </View>
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
                  <View
                    style={{
                      paddingHorizontal: 18,
                      marginTop: SIZES.screenHeight * 0.03,
                    }}
                  >
                    <Text
                      style={{ fontFamily: "Poppins_Medium", fontSize: 15 }}
                    >
                      Cycle Information
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text
                          style={{
                            fontFamily: "Poppins_Medium",
                            fontSize: 16,
                            marginRight: 14,
                          }}
                        >
                          Period
                        </Text>
                        <Text style={{ fontFamily: "Poppins_Regular" }}>
                          {infoUserPeriod > 0
                            ? `${infoUserPeriod} Days`
                            : `${infoUserPeriod} Day`}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontFamily: "Poppins_Medium" }} t>
                          {infoUserCycle > 0
                            ? `${infoUserCycle} Days`
                            : `${infoUserCycle} Day`}
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <TouchableOpacity
                          onPress={toggleModal}
                          style={{ marginRight: 14 }}
                        >
                          <Edit name="edit" size={24} color="#0000ff" />
                        </TouchableOpacity>
                        {/* <View>
                          <Icon
                            name="delete-outline"
                            size={24}
                            color={COLORS.primary}
                          />
                        </View> */}
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </>
          )}
        </ScrollView>
        <Modal isVisible={isModalVisible} animationType="slide">
          <View style={{ backgroundColor: "#fff", borderRadius: 8 }}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingTop: 8,
                  paddingBottom: 10,
                }}
              >
                <Text style={{ fontFamily: "Poppins_Medium", fontSize: 14 }}>
                  Update Menstraul Cycle
                </Text>
                <TouchableOpacity onPress={toggleModal}>
                  <Icons name="close" size={20} />
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 12, marginBottom: 10 }}>
                <Input
                  maxLength={2}
                  placeholder="Number of days e.g 5"
                  keyboardType="numeric"
                  defaultValue={infoUserCycle?.toString()}
                  onChangeText={(text) => setNum(text)}
                />
              </View>
              <View style={{ marginTop: 12 }}>
                <Input
                  maxLength={2}
                  placeholder="Number of days e.g 5"
                  keyboardType="numeric"
                  defaultValue={infoUserPeriod?.toString()}
                  onChangeText={(text) => setNumP(text)}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: SIZES.screenHeight * 0.01,
                alignSelf: "center",
                paddingBottom: 10,
              }}
            >
              <AppButton
                color={COLORS.primary}
                text={load ? "Loading.." : "Update Cycle"}
                loading={load}
                disabled={load || !(num && numP)}
                onPress={() => updateMentrualCycle()}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default MenstraulCycle;

const styles = StyleSheet.create({});
