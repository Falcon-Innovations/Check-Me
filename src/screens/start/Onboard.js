import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/i18n/i18n";
import { COLORS, images, SIZES } from "../../utility";

const Onboard = (props) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState(i18n.language);

  const [activeLang, setActiveLang] = useState(false);

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };
  const data = [
    {
      title: t("onboard1title"),
      text: t("text1"),
      image:
        "https://res.cloudinary.com/dav5lnlxj/image/upload/v1665910054/hospital_vpjetb.png",
    },
    {
      title: t("onboard2title"),
      text: t("text2"),
      image:
        "https://res.cloudinary.com/dav5lnlxj/image/upload/v1665910060/doc_umpdad.png",
    },
    {
      title: t("onboard3title"),
      text: t("text3"),
      image:
        "https://res.cloudinary.com/dav5lnlxj/image/upload/v1665910060/calender_wq42mz.png",
    },
  ];

  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <LinearGradient colors={["#F7007D", "#CF6283"]} style={styles.slide}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </LinearGradient>
    );
  };

  const LanguageSwitcher = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          paddingTop:
            Platform.OS === "ios"
              ? SIZES.screenHeight * 0.04
              : SIZES.screenHeight * 0.03,
        }}
      >
        <View
          style={{
            paddingTop: 12,
            marginTop: 8,
            paddingRight: 25,
            alignSelf: "flex-end",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => changeLanguage("en")}
            style={[
              currentLanguage === "en" ? styles.active : styles.unActive,
              { marginRight: 8 },
            ]}
          >
            <Text
              style={
                currentLanguage === "en"
                  ? { fontFamily: "Poppins_Medium", color: "#fff" }
                  : { fontFamily: "Poppins_Medium", color: "#3C1053" }
              }
            >
              EN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLanguage("fr")}
            style={[
              currentLanguage === "fr" ? styles.active : styles.unActive,
              { alignItems: "center" },
            ]}
          >
            <Text
              style={
                currentLanguage === "fr"
                  ? { fontFamily: "Poppins_Medium", color: "#fff" }
                  : { fontFamily: "Poppins_Medium", color: "#3C1053" }
              }
            >
              FR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>{t("next")}</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>{t("start")}</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>{t("skip")}</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>{t("back")}</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <LanguageSwitcher />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showSkipButton
        renderSkipButton={renderSkipButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    paddingTop: SIZES.screenHeight * 0.18,
    // justifyContent: "center",
    // backgroundColor: COLORS.bgColor,
  },
  image: {
    // marginBottom: 20,
    height: SIZES.screenHeight * 0.25,
    alignSelf: "center",
    justifyContent: "center",
    width: 278,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins_SemiBold",
    marginHorizontal: 60,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins_Regular",
    marginHorizontal: 60,
    marginTop: 20,
  },
  dotStyle: {
    backgroundColor: "#fff",
  },
  activeDotStyle: {
    backgroundColor: "#FF456D",
  },
  rightTextWrapper: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginRight: 20,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: "#fff",
    fontFamily: "Poppins_Medium",
    fontSize: 14,
  },
  leftTextWrapper: {
    paddingHorizontal: 4,
    // paddingVertical: 2,
    marginLeft: 20,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftText: {
    color: "#fff",
    fontFamily: "Poppins_Medium",
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: "Poppins_Medium",
    textAlign: "center",
    color: "#fff",
  },
  unActive: {
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == "ios" ? 8 : 7,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#3C1053",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == "ios" ? 8 : 7,
    borderRadius: 24,
    borderWidth: 2,
    backgroundColor: "#3C1053",
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Onboard;
