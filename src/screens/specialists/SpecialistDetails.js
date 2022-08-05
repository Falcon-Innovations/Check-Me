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
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Divider } from "react-native-elements";

import { CustomStatusBar } from "../../components";
import { COLORS, SIZES } from "../../utility";

// const icons = ["message1", "phone", "mail"];

const icons = [
  {
    id: 1,
    name: "message1",
  },
  {
    id: 2,
    name: "phone",
  },
  {
    id: 3,
    name: "mail",
  },
];

const SpecialistDetails = ({ route }) => {
  const item = route.params;

  console.log("Data", item);
  return (
    <>
      {Platform.OS == "android" && (
        <StatusBar hidden={false} backgroundColor={COLORS.primary} />
      )}
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
                <Text style={styles.speciality}>{item.speciality[0]}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>

              <View style={styles.iconView}>
                {icons.map((icon) => (
                  <TouchableOpacity key={icon.id} style={styles.iconContainer}>
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
