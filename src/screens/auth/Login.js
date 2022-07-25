import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Keyboard,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { COLORS, images, SIZES } from "../../utility";
import { Input, AppButton, SocialButton } from "../../components";

const Login = () => {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    phone: "",
    pin: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.phone) {
      handleErrors("Please input phone number", "phone");
      isValid = false;
    } else if (inputs.phone.length < 9) {
      handleErrors("Enter valid phone number", "phone");
      isValid = false;
    }

    if (!inputs.pin) {
      handleErrors("Please input a valid pin", "pin");
      isValid = false;
    } else if (inputs.pin.length < 5) {
      handleErrors("Pin is 5 digits", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = async () => {
    setLoading(true);
    await signUp({
      phone: inputs.phone,
      pin: inputs.pin,
    });
    setLoading(false);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleErrors = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <>
      <StatusBar hidden={false} backgroundColor={COLORS.primary} />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView style={styles.viewContainer}>
          <View style={{ paddingTop: 10, paddingBottom: 8 }}>
            <Image
              resizeMode="contain"
              source={images.authImage}
              style={styles.img}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.welcomeText,
                { color: COLORS.primary, fontFamily: "Poppins_Bold" },
              ]}
            >
              Welcome back!
            </Text>
            <Text
              style={[styles.welcomeText, { fontFamily: "Poppins_Medium" }]}
            >
              Kindly fill this to sign in.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Input
              maxLength={9}
              placeholder="Enter your number"
              keyboardType={Platform.OS == "android" ? "numeric" : "number-pad"}
              error={errors.phone}
              onFocus={() => handleErrors(null, "phone")}
              onChangeText={(text) => handleOnChange(text, "phone")}
            />
            <Input
              maxLength={5}
              placeholder="Enter a 5 digit pin"
              keyboardType={Platform.OS == "android" ? "numeric" : "number-pad"}
              error={errors.pin}
              pin
              onFocus={() => handleErrors(null, "pin")}
              onChangeText={(text) => handleOnChange(text, "pin")}
            />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.primary,
                fontFamily: "Poppins_Medium",
                fontSize: 12,
                marginLeft: 10,
              }}
            >
              Forgot Password?
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <AppButton
              text="Login"
              color={COLORS.primary}
              onPress={() => navigation.navigate("Dashboard")}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              marginVertical: 15,
              fontFamily: "Poppins_Regular",
            }}
          >
            <Text>Or you can sign in with</Text>
          </View>

          <SocialButton
            icon="google"
            title="Login with Google"
            backgroundColor="#3b5998"
          />

          <View
            style={{
              alignItems: "center",
              paddingVertical: 10,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text>{`Don't have an account yet?`}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                  textDecorationColor: "#000",
                  color: COLORS.primary,
                  fontFamily: "Poppins_Medium",
                  fontSize: 15,
                  marginLeft: 10,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  img: {
    width: SIZES.screenWidth * 0.35,
    height: SIZES.screenWidth * 0.35,
    alignSelf: "flex-start",
  },
  viewContainer: {
    paddingHorizontal: 15,
  },

  imageContainer: {},

  welcomeText: {
    marginRight: 6,
    fontSize: 14,
  },

  formContainer: {
    marginTop: 20,
  },
  resendBtn: {
    color: "#EB4864",
    fontSize: 18,
    marginLeft: 20,
  },
  loginView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  haveAnAccount: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Poppins_Regular",
  },
});
