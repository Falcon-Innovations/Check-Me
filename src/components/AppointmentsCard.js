import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import Icons from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { COLORS } from "../utility";
import { useNavigation } from "@react-navigation/native";

const AppointmentsCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("AppointmentDetails")}
    >
      <View style={styles.cardContent}>
        <View style={styles.title}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="stethoscope" size={18} color={COLORS.primary} />

            <Text
              style={{
                marginLeft: 14,
                fontFamily: "Poppins_Medium",
                color: "#2A2A2A",
              }}
            >
              AppointmentsCard
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="clock"
              size={14}
              color={COLORS.primary}
              style={{ marginRight: 4 }}
            />
            <Text style={{ fontSize: 11, fontFamily: "Poppins_Medium" }}>
              10:00am
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 8, paddingLeft: 30 }}>
          <Text numberOfLines={2} style={styles.body}>
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout, the final text replacing the
            false text as soon
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  // alignItems: "center",
                }}
              >
                <Icons name="user-nurse" size={15} color="#8577FC" />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 12,
                    fontFamily: "Poppins_Medium",
                    color: "#8577FC",
                  }}
                >
                  Dr Yuyun Francis
                </Text>
              </View>
              <View
                style={{
                  marginTop: 4,
                  flexDirection: "row",
                  // alignItems: "center",
                }}
              >
                <Icons name="calendar-check" size={15} color="#8577FC" />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 12,
                    fontFamily: "Poppins_Medium",
                    color: "#8577FC",
                  }}
                >
                  {new Date().toUTCString().split(" ").slice(0, 4).join(" ")}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: 4,
              }}
            >
              <TouchableOpacity style={[styles.btn, { marginRight: 4 }]}>
                <Text style={styles.text}>completed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Cancelled</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentsCard;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingHorizontal: 4,
  },
  body: {
    color: "#4E4C4A",
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    lineHeight: 20,
  },
  text: {
    fontSize: 9,
    color: COLORS.primary,
    fontFamily: "Poppins_Medium",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#FFE2DC",
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
