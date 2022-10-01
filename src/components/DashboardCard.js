import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";

import { COLORS, images, SIZES } from "../utility";

const DashboardCard = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      title: t("selfExamine"),
      screen: "SelfExamination",
      img: images.healthy,
    },
    {
      id: 2,
      title: t("risk"),
      screen: "RiskFactors",
      img: images.risk,
    },
    {
      id: 3,
      title: t("hospitals"),
      screen: "Hospitals",
      img: images.hospitals,
    },

    {
      id: 4,
      title: "specialist",
      screen: "Specialists",
      img: images.doc,
    },
  ];
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontFamily: "Poppins_SemiBold", fontSize: 14 }}>
        {t("features")}
      </Text>
      <View style={styles.container}>
        {items.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            key={item.id}
            style={styles.card}
          >
            <Image
              source={item.img}
              style={{
                width: SIZES.screenWidth * 0.22,
                height: SIZES.screenWidth * 0.22,
              }}
              resizeMode="contain"
            />
            <Text
              numberOfLines={1}
              style={{
                position: "absolute",
                fontSize: 10,
                fontFamily: "Poppins_Medium",
                top: SIZES.screenHeight * 0.14,
                alignSelf: "center",
                paddingHorizontal: 5,
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 15,
  },
  card: {
    marginHorizontal: 5,
    // marginRight: 15,
    marginHorizontal: 12,
    marginBottom: 20,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "42%",
    borderColor: "#F39FCA",
    borderWidth: 0.5,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: SIZES.screenHeight * 0.06,
  },
});
