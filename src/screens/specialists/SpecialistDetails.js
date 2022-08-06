import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/SimpleLineIcons";
import Ribbon from "react-native-vector-icons/MaterialCommunityIcons";
import SendSMS from "react-native-sms";
import { Divider } from "react-native-elements";
import { Context as AuthContext } from "../../contexts/authContext";

import { AppButton, AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, SIZES } from "../../utility";

const SpecialistDetails = ({ route }) => {
  const item = route.params;

  const { state } = React.useContext(AuthContext);
  const [mobileNumber, setMobileNumber] = useState(item.phone);
  const [bodySMS, setBodySMS] = useState(
    `Hello, My name is ${state?.user?.name} I will love to consult`
  );
  const [whatsAppMsg, setWhatsAppMsg] = useState("Please follow Check Me");

  const initiateSMS = async () => {
    // Check for perfect 10 digit length
    // if (mobileNumber.length < 9) {
    //   alert("Please insert correct contact number");
    //   return;
    // }

    SendSMS.send(
      {
        // Message body
        body: bodySMS,
        // Recipients Number
        recipients: [mobileNumber],
        // An array of types
        // "completed" response when using android
        successTypes: ["sent", "queued"],
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log("SMS Sent Completed");
        } else if (cancelled) {
          console.log("SMS Sent Cancelled");
        } else if (error) {
          console.log("Some error occured");
        }
      }
    );
  };

  const initiateWhatsAppSMS = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length < 9) {
      alert("Please insert correct contact number");
      return;
    }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      "whatsapp://send?text=" + whatsAppMsg + "&phone=237" + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  const openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = `telprompt:${item.phone}`;
    } else {
      number = `tel:${item.phone}`;
    }
    Linking.openURL(number);
  };

  const icons = [
    {
      id: 1,
      name: "message1",
      onpress: initiateWhatsAppSMS,
    },
    {
      id: 2,
      name: "phone",
      onpress: openDialScreen,
    },
    {
      id: 3,
      name: "mail",
      onpress: initiateSMS,
    },
  ];

  const aboutData = [
    {
      id: 1,
      info: item.education,
      icon: <Icons name="graduation" size={18} color={"#323131"} />,
    },
    {
      id: 2,
      info: item.work,
      icon: <Icons name="briefcase" size={18} color={"#323131"} />,
    },
    {
      id: 3,
      info: item.speciality,
      icon: <Ribbon name="ribbon" size={18} color={"#323131"} />,
    },
  ];

  console.log("Data", item);
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          contentContainerStyle={{ marginHorizontal: 14, paddingVertical: 15 }}
        >
          <View style={styles.header}>
            <Image source={item.image} style={styles.image} />
            <View>
              <View style={{ alignSelf: "flex-start" }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.speciality}>{item.speciality}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>

              <View style={styles.iconView}>
                {icons.map((icon) => (
                  <TouchableOpacity
                    key={icon.id}
                    style={styles.iconContainer}
                    onPress={icon.onpress}
                  >
                    <Icon name={icon.name} size={18} color="#333333" />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: SIZES.screenHeight * 0.05,
              paddingHorizontal: 15,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "Poppins_Regular",
                    fontSize: 14,
                    color: COLORS.textColor,
                  }}
                >
                  Patients
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.primary,
                    fontFamily: "Poppins_Medium",
                    paddingTop: 5,
                  }}
                >
                  {item.patients}
                </Text>
              </View>
              <Divider color="#E6E6E6" orientation="vertical" width={2} />
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "Poppins_Regular",
                    fontSize: 14,
                    color: COLORS.textColor,
                  }}
                >
                  Experience
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.primary,
                    fontFamily: "Poppins_Medium",
                    paddingTop: 5,
                  }}
                >{`${item.experience} Years`}</Text>
              </View>
              <Divider color="#E6E6E6" orientation="vertical" width={2} />
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "Poppins_Regular",
                    fontSize: 14,
                    color: COLORS.textColor,
                  }}
                >
                  Rating
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.primary,
                    fontFamily: "Poppins_Medium",
                    paddingTop: 5,
                  }}
                >
                  {item.rating}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: SIZES.screenHeight * 0.03,
            }}
          >
            <Text
              style={{
                lineHeight: 23,
                color: "#5A5858",
                fontFamily: "Poppins_Regular",
                fontSize: 14,
              }}
            >
              {item.description}
            </Text>
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 15 }}>
            {aboutData.map((about) => (
              <View
                key={about.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                    borderRadius: 6,
                    backgroundColor: "#F0F0F0",
                    marginRight: 15,
                    marginVertical: 10,
                  }}
                >
                  {about.icon}
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Poppins_Medium",
                      color: COLORS.textColor,
                    }}
                  >
                    {about.info}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View>
            <Text
              style={{
                marginLeft: 6,
                marginBottom: 10,
                color: "#5A5A5A",
                fontFamily: "Poppins_Medium",
              }}
            >
              Specialist Availability
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                // alignItems: "center",
                paddingBottom: SIZES.screenHeight * 0.03,
                justifyContent: "center",
                alignSelf: "flex-start",
              }}
            >
              {item.availability.map((available) => (
                <View
                  key={available.id}
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    backgroundColor: "#FFE2DC",
                    marginHorizontal: 3,
                    borderRadius: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "Poppins_Medium",
                      color: COLORS.primary,
                    }}
                  >
                    {available.day}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: "Poppins_Regular",
                      color: COLORS.textColor,
                    }}
                  >
                    {available.time}
                  </Text>
                </View>
              ))}
            </View>

            {/* <View>
              <Text></Text>
            </View> */}
          </View>

          <View style={{ marginTop: 10 }}>
            <AppButton
              text="Contact Specialist"
              color={COLORS.primary}
              // disabled={loading}
              // onPress={register}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SpecialistDetails;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: SIZES.screenWidth * 0.38,
    height: SIZES.screenWidth * 0.38,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: SIZES.screenWidth * 0.06,
  },
  name: {
    color: "#5A5A5A",
    fontFamily: "Poppins_Medium",
    fontSize: 16,
  },
  speciality: {
    color: "#AEADAD",
    fontFamily: "Poppins_Regular",
    fontSize: 12,
  },
  location: {
    fontFamily: "Poppins_Regular",
    fontSize: 13,
    color: COLORS.textColor,
  },
  iconContainer: {
    marginRight: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#F39FCA",
    borderRadius: 6,
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: SIZES.screenHeight * 0.03,
    alignSelf: "flex-end",
  },
});
