import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/Ionicons";
import { AppButton, AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, SIZES } from "../../utility";

const AppointmentDetails = ({ route }) => {
  const item = route.params;

  console.log("====================================");
  console.log("items", item);
  console.log("====================================");
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text="Appointment Details" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          style={{ marginHorizontal: 10 }}
          contentContainerStyle={{
            paddingTop: SIZES.screenHeight * 0.02,
            paddingBottom: SIZES.screenHeight * 0.04,
          }}
        >
          <View>
            <Text style={styles.title}>{item?.title}</Text>
          </View>

          <View style={styles.appointment}>
            <View style={styles.component}>
              <View style={[styles.iconContainer, styles.elevation]}>
                <Icon name="user-nurse" size={16} color="#3A3B3C" />
              </View>
              <View style={{ marginLeft: 8 }}>
                <Text
                  style={{
                    fontFamily: "Poppins_Medium",
                    fontSize: 10,
                    color: "gray",
                  }}
                >
                  Specialist
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "Poppins_Medium",
                    fontSize: 10,
                    color: COLORS.primary,
                    // width: "80%",
                  }}
                >
                  {`Dr ${item.recipient.firstName} ${item.recipient.lastName} `}
                </Text>
              </View>
            </View>
            <View style={[styles.component]}>
              <View style={[styles.iconContainer, styles.elevation]}>
                <Icon name="calendar" size={16} color="#3A3B3C" />
              </View>
              <View style={{ marginLeft: 8 }}>
                <Text
                  style={{
                    fontFamily: "Poppins_Medium",
                    fontSize: 10,
                    color: "gray",
                  }}
                >
                  {item.time}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "Poppins_Medium",
                    fontSize: 10,
                    color: COLORS.primary,
                  }}
                >
                  {new Date(item.day)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 8,
              paddingTop: SIZES.screenHeight * 0.04,
            }}
          >
            <Text style={styles.des}>Description of appointment</Text>
            <Text style={styles.descText}>{item.description}</Text>
          </View>

          <View
            style={{ marginTop: SIZES.screenHeight * 0.06, marginBottom: 30 }}
          >
            <View
              style={{
                paddingHorizontal: 15,
                flexDirection: "row",
                // alignItems: "center",
              }}
            >
              <Icons name="ios-information-circle" size={15} />
              <Text
                style={{
                  fontFamily: "Poppins_Regular",
                  fontSize: 10,
                  marginLeft: 12,
                  marginBottom: 12,
                }}
              >
                Please click on any of the buttons below. This is to updated us
                about the status of your appointment
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View>
                <AppButton
                  text="Cancelled"
                  color="#ad1027"
                  icon="cancel"
                  onPress={() =>
                    Alert.alert(
                      "Notification",
                      "We are working on this. Please be patient. Thank you"
                    )
                  }
                />
              </View>
              <View>
                <AppButton
                  text="Completed"
                  color="#01644c"
                  icon="checkbox-marked"
                  onPress={() =>
                    Alert.alert(
                      "Notification",
                      "We are working on this. Please be patient. Thank you"
                    )
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_Medium",
    fontSize: 16,
    color: COLORS.primary,
  },
  appointment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingTop: SIZES.screenHeight * 0.04,
  },
  component: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#d3d3d3",
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 0.5,
  },
  elevation: {},
  des: {
    marginBottom: 12,
    fontFamily: "Poppins_Medium",
    color: COLORS.primary,
    fontSize: 14,
  },
  descText: {
    fontFamily: "Poppins_Regular",
    fontSize: 14,
  },
});
