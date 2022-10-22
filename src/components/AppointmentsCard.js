import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import Icons from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { COLORS } from "../utility";
import { useNavigation } from "@react-navigation/native";

const AppointmentsCard = ({
  title,
  time,
  desc,
  doc,
  date,
  status,
  onPress,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
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
              {title}
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
              {time}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 8, paddingLeft: 30 }}>
          <Text numberOfLines={2} style={styles.body}>
            {desc}
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
                  numberOfLines={1}
                  style={{
                    marginLeft: 10,
                    fontSize: 12,
                    fontFamily: "Poppins_Medium",
                    color: "#8577FC",
                    width: "50%",
                  }}
                >
                  {doc}
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
                  {/* {new Date().toUTCString().split(" ").slice(0, 4).join(" ")} */}
                  {date}
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
                <Text style={styles.text}>{status}</Text>
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
    marginBottom: 15,
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
