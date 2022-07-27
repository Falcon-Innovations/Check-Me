import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import AuthButton from "../../components/utils/AuthButton";

import { COLORS, images, SIZES } from "../../utility";
import { AppButton } from "../../components";

const OTPVerification = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginHorizontal: 15, paddingTop: 10 }}
      >
        <Icon name="arrow-left" size={30} />
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: 15,
          paddingTop: SIZES.screenHeight * 0.1,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            resizeMode="contain"
            source={images.authImage}
            style={styles.img}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Poppins_Regular",
              fontSize: 18,
              textAlign: "left",
            }}
          >
            Please enter the verification code sent to
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_SemiBold",
              color: COLORS.primary,
              alignSelf: "flex-start",
            }}
          >
            +237673003113
          </Text>
        </View>
        <View style={{ alignItems: "center", alignSelf: "center" }}>
          <OTPInputView
            style={{
              width: "80%",
              height: 200,

              justifyContent: "center",
            }}
            placeholderTextColor="#c1c1c1"
            placeholderCharacter="3"
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`),
                navigation.navigate("Dashboard");
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 15 }}>
        <AppButton
          text="Verify"
          color={COLORS.primary}
          onPress={() => navigation.navigate("Dashboard")}
        />
      </View>
    </SafeAreaView>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: COLORS.primary,
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1.5,
    borderColor: "#949494",
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.primary,
  },
});
