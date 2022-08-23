import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useRef, useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import AuthButton from "../../components/utils/AuthButton";

import { COLORS, images, SIZES } from "../../utility";
import { AppButton } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const OTPVerification = ({ route }) => {
  const phoneInput = route.params;

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ one: "", two: "", three: "", four: "" });
  const { phoneNumber } = route.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("====================================");
  console.log("phone", phoneInput);
  console.log("====================================");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={100}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        style={{ paddingBottom: 30 }}
      >
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
            // alignSelf: "center",
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
              source={images.verifyotp}
              style={styles.img}
            />
          </View>
          <View style={{ paddingVertical: 12, marginBottom: 12 }}>
            <Text
              style={{
                fontFamily: "Poppins_Regular",
                fontSize: 14,
                textAlign: "left",
              }}
            >
              Please enter the verification code sent to
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins_SemiBold",
                color: COLORS.primary,
                alignSelf: "center",
                marginTop: 4,
              }}
            >
              +237673993113
            </Text>
          </View>
        </View>
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              placeholder="3"
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({ ...otp, one: text });
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              placeholder="8"
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({ ...otp, two: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              placeholder="4"
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({ ...otp, three: text });
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
            />
          </View>

          <View style={styles.otpBox}>
            <TextInput
              placeholder="2"
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, four: text });
                !text && thirdInput.current.focus();
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            paddingVertical: 12,
            marginLeft: 8,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontFamily: "Poppins_Medium", color: COLORS.primary }}>
            Resend code
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20, marginHorizontal: 15 }}>
          <AppButton
            text="Verify"
            color={COLORS.primary}
            onPress={() => navigation.navigate("Dashboard")}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;
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
  phoneNumberText: {
    fontSize: 16,
    // fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 18 * 1.4,
    color: COLORS.primary,
  },
  otpContainer: {
    marginHorizontal: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderColor: "#C8C8C8",
    borderWidth: 1,
    shadowColor: "#000",
    elevation: 4,
  },
  otpText: {
    fontSize: 25,
    color: COLORS.textColor,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  codeText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
