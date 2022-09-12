import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { COLORS, images, SIZES } from "../../utility";
import { Input, AppButton, PhoneInputField } from "../../components";
import { Context as UserContext } from "../../contexts/userContext";
import Loader from "../../components/utils/Loader";

const Register = () => {
  const navigation = useNavigation();
  const { signUp } = React.useContext(UserContext);
  const phoneInput = useRef(null);
  const [inputs, setInputs] = useState({
    fullname: "",
    phone: "",
    pin: "",
    kfirmPin: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.fullname) {
      handleErrors("Please input your  fullname", "fullname");
      isValid = false;
    }

    if (!inputs.phone) {
      handleErrors("Please input phone number", "phone");
      isValid = false;
    } else if (inputs.phone.length < 9) {
      handleErrors("Enter valid phone number", "phone");
      isValid = false;
    }

    // if (!inputs.email) {
    //   handleErrors('Please input an email', 'email');
    //   isValid = false;
    // } else if (inputs.phone.length < 9) {
    //   handleErrors('Enter a valid email', 'email');
    //   isValid = false;
    // }

    if (isValid) {
      register();
    }
  };

  const register = async () => {
    setLoading(true);
    await signUp({
      telephone: inputs.phone,
      name: inputs.fullname,
      email: inputs.email,
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
      {loading ? (
        <View style={styles.viewContainer}>
          <Loader visible={true} />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView
            style={styles.viewContainer}
            contentContainerStyle={{ paddingTop: SIZES.screenHeight * 0.08 }}
          >
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
                Welcome!
              </Text>
              <Text
                style={[styles.welcomeText, { fontFamily: "Poppins_Medium" }]}
              >
                Kindly fill this to sign up.
              </Text>
            </View>
            <View style={styles.formContainer}>
              <Input
                // maxLength={35}
                placeholder="Enter your name"
                keyboardType="default"
                error={errors.fullname}
                onFocus={() => handleErrors(null, "fullname")}
                onChangeText={(text) => handleOnChange(text, "fullname")}
              />
              <Input
                // maxLength={35}
                placeholder="Enter your email"
                keyboardType="email-address"
                error={errors.email}
                onFocus={() => handleErrors(null, "email")}
                onChangeText={(text) => handleOnChange(text, "email")}
              />

              <PhoneInputField
                phoneInput={phoneInput}
                phoneNumber={inputs.phone}
                onChange={(text) => {
                  handleOnChange(text, "phone");
                }}
              />

              {/* <Input
                placeholder="Enter a password"
                error={errors.pin}
                pin
                onFocus={() => handleErrors(null, 'pin')}
                onChangeText={(text) => handleOnChange(text, 'pin')}
              />
              <Input
                placeholder="Confirm your password"
                error={errors.kfirmPin}
                pin
                onFocus={() => handleErrors(null, "kfirmpin")}
                onChangeText={(text) => handleOnChange(text, "kfirmpin")}
              /> */}
            </View>
            <View style={{ alignItems: "center" }}>
              <Text>By clicking on Sign up, you agree to </Text>
              <Text
                style={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                  textDecorationColor: "#000",
                  color: COLORS.primary,
                  fontFamily: "Poppins_Medium",
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                Terms & Privacy Policy
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <AppButton
                text="Register"
                color={COLORS.primary}
                disabled={loading || !inputs.fullname || !inputs.phone}
                onPress={validate}
              />
            </View>
            {/* <View
              style={{
                alignItems: 'center',
                marginVertical: 15,
                fontFamily: 'Poppins_Regular',
              }}
            >
              <Text>Or you can sign up with</Text>
            </View>

            <SocialButton
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
              }}
            >
              <Text>{`Not new here?`}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewContainer: {
    paddingHorizontal: 15,
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
  phoneInputContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
    borderWidth: "1px",
    borderColor: "#E6E6E6",
  },
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
