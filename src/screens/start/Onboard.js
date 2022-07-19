import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { COLORS, images, SIZES } from "../../utility";

const data = [
  {
    title: "Hospitals",
    text: "Get information on hospitals in your area that treat breast cancer",
    image: images.hospital,
  },
  {
    title: "Connect and receive expert guidance",
    text: "Experts, care takers, consultants and doctors always there to help",
    image: images.doctors,
  },
  {
    title: "Reminders",
    text: "Periodic reminders to make sure you are up to date with your self care",
    image: images.calender,
  },
];

const Onboard = (props) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <LinearGradient
        colors={["#EA80B0", "#FF89AD", "#FAA492"]}
        style={styles.slide}
      >
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </LinearGradient>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Sign Up</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Skip</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Back</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
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
    justifyContent: "center",
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
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Lato_Black",
    marginHorizontal: 60,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Lato_Regular",
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
    width: 40,
    height: 40,
    marginRight: 20,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: "#fff",
    fontFamily: "Lato_Black",
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftText: {
    color: "#fff",
    fontFamily: "Lato_Black",
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
    fontFamily: "Lato_Black",
    textAlign: "center",
    color: "#fff",
  },
});

export default Onboard;
