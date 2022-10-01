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
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";

import "../../../assets/i18n/i18n";
import { COLORS, images, SIZES } from "../../utility";
import {
  Input,
  AppButton,
  SocialButton,
  PhoneInputField,
} from "../../components";
import Loader from "../../components/utils/Loader";
import { Context as UserContext } from "../../contexts/userContext";
import { placeholder } from "i18n-js";

const Login = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState(i18n.language);

  const [activeLang, setActiveLang] = useState(false);

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };

  const { signIn, sendOTP } = React.useContext(UserContext);
  const [inputs, setInputs] = useState({
    phone: "",
  });
  const phoneInput = useRef(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.phone) {
      handleErrors("Please input your phonr number", "phonr");
      isValid = false;
    }
    // if (!inputs.pin) {
    //   handleErrors('Please input a valid pin', 'pin');
    //   isValid = false;
    // } else if (inputs.pin.length < 5) {
    //   handleErrors('Pin is 5 digits', 'password');
    //   isValid = false;
    // }

    if (isValid) {
      setLoading(true);
      await sendOTP({ phoneNumber: inputs.phone });
      setLoading(false);
    }
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
      {loading ? (
        <View style={styles.viewContainer}>
          <Loader visible={true} />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView
            style={styles.viewContainer}
            contentContainerStyle={{
              justifyContent: "center",
              paddingTop: SIZES.screenHeight * 0.02,
            }}
          >
            <View
              style={{
                alignSelf: "flex-end",
                flexDirection: "row",
                alignItems: "center",
                paddingTop:
                  Platform.OS == "ios"
                    ? SIZES.screenHeight * 0.01
                    : SIZES.screenHeight * 0.04,
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
                      : { fontFamily: "Poppins_Medium", color: "#3c1361" }
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
                      : { fontFamily: "Poppins_Medium", color: "#3c1361" }
                  }
                >
                  FR
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 10, paddingBottom: 8 }}>
              <Image
                resizeMode="contain"
                source={images.authImage}
                style={styles.img}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "60%",
              }}
            >
              <Text
                style={[
                  styles.welcomeText,
                  { color: COLORS.primary, fontFamily: "Poppins_Bold" },
                ]}
              >
                {t("welcome1")}
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.welcomeText, { fontFamily: "Poppins_Medium" }]}
              >
                {t("welcome2")}
              </Text>
            </View>
            <View style={styles.formContainer}>
              {/* <Input
                placeholder="Enter your email"
                keyboardType="email-address"
                error={errors.email}
                onFocus={() => handleErrors(null, 'email')}
                onChangeText={(text) => handleOnChange(text, 'email')}
              />
              <Input
                placeholder="Enter your password"
                error={errors.pin}
                pin
                onFocus={() => handleErrors(null, "pin")}
                onChangeText={(text) => handleOnChange(text, "pin")}
              /> */}

              <PhoneInputField
                phoneInput={phoneInput}
                phoneNumber={inputs.phone}
                onChange={(text) => {
                  handleOnChange(text, "phone");
                }}
              />
            </View>
            {/* <View>
              <Text
                style={{
                  color: COLORS.primary,
                  fontFamily: 'Poppins_Medium',
                  fontSize: 12,
                  marginLeft: 10,
                }}
              >
                Forgot Password?
              </Text>
            </View> */}

            <View style={{ marginTop: 20 }}>
              <AppButton
                text={t("login")}
                color={COLORS.primary}
                // onPress={() => navigation.navigate('Dashboard')}
                onPress={handleSignIn}
                disabled={loading || !inputs.phone}
              />
            </View>
            {/* <View
              style={{
                alignItems: 'center',
                marginVertical: 15,
                fontFamily: 'Poppins_Regular',
              }}
            >
              <Text>Or you can sign in with</Text>
            </View> */}

            {/* <SocialButton
              icon="google"
              title="Login with Google"
              backgroundColor="#3b5998"
            /> */}

            <View
              style={{
                alignItems: "center",
                paddingVertical: 10,
                justifyContent: "center",
                flexDirection: "row",
                marginTop: SIZES.screenHeight * 0.02,
              }}
            >
              <Text>{t("noAccount")}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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
                  {t("signup")}
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      )}
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
  unActive: {
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == "ios" ? 8 : 6,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == "ios" ? 8 : 6,
    borderRadius: 24,
    borderWidth: 2,
    backgroundColor: COLORS.primary,
    borderColor: "#3c1361",
    alignItems: "center",
    justifyContent: "center",
  },
});
