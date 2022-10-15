import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, SIZES } from "../../utility";

const AppointmentDetails = () => {
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text="Appointment Details" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          style={{ marginHorizontal: 15 }}
          contentContainerStyle={{
            paddingTop: SIZES.screenHeight * 0.02,
            paddingBottom: SIZES.screenHeight * 0.04,
          }}
        >
          <View>
            <Text style={styles.title}>My appointment title</Text>
          </View>

          <View style={styles.appointment}>
            <View style={styles.component}>
              <View style={[styles.iconContainer, styles.elevation]}>
                <Icon name="user-nurse" size={20} color="#3A3B3C" />
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
                    fontSize: 12,
                    color: COLORS.primary,
                  }}
                >
                  Dr Yuyun Francis
                </Text>
              </View>
            </View>
            <View style={styles.component}>
              <View style={[styles.iconContainer, styles.elevation]}>
                <Icon name="calendar" size={20} color="#3A3B3C" />
              </View>
              <View style={{ marginLeft: 8 }}>
                <Text
                  style={{
                    fontFamily: "Poppins_Medium",
                    fontSize: 10,
                    color: "gray",
                  }}
                >
                  10:00AM
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "Poppins_Medium",
                    fontSize: 12,
                    color: COLORS.primary,
                  }}
                >
                  {new Date().toUTCString().split(" ").slice(0, 4).join(" ")}
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
            <Text style={styles.descText}>
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout, the final text replacing
              the false text as soon
            </Text>
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
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#d3d3d3",
    paddingVertical: 8,
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
