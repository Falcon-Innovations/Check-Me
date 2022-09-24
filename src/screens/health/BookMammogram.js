import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AppButton, AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, images, SIZES } from "../../utility";
import { useNavigation } from "@react-navigation/native";

const BookMammogram = () => {
  const navigation = useNavigation();
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          style={{ paddingVertical: 20, marginHorizontal: 15 }}
          contentContainerStyle={{
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_Medium",
              fontSize: 16,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {`Book a mammogram `}
            <Text
              style={{ fontFamily: "Poppins_Medium", color: COLORS.primary }}
            >
              {" appointment \n"}
            </Text>
            <Text style={{ fontFamily: "Poppins_Medium", fontSize: 16 }}>
              with your nearest hospital
            </Text>
          </Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: SIZES.screenHeight * 0.09,
            }}
          >
            <Image
              source={images.calendar}
              resizeMode="contain"
              style={{
                width: SIZES.screenWidth * 0.52,
                height: SIZES.screenWidth * 0.52,
              }}
            />
          </View>
          <View style={{ marginTop: SIZES.screenHeight * 0.1 }}>
            <Text
              style={{
                fontFamily: "Poppins_Regular",
                fontSize: 14,
                alignItems: "center",
                textAlign: "center",
                paddingHorizontal: 20,
              }}
            >
              {
                "A mammogram is an x-ray exam of your breast. It can spot signs of breast cancer that are too small to be felt by you or your doctor."
              }
            </Text>
          </View>

          <View style={{ marginTop: SIZES.screenHeight * 0.1 }}>
            <AppButton
              text="Get Started"
              color={COLORS.primary}
              //   disabled={loading}
              onPress={() => navigation.navigate("Hospitals")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BookMammogram;

const styles = StyleSheet.create({});
