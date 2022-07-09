import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "react-native-paper";

import { COLORS, images, SIZES } from "../../utility";

import { Input, AppButton } from "../../components";

const Register = () => {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    email: "",
    fullname: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleErrors("Email is required", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleErrors("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleErrors("Please input fullname", "fullname");
      isValid = false;
    }

    if (!inputs.phone) {
      handleErrors("Please input phone number", "phone");
      isValid = false;
    } else if (inputs.phone.length < 9) {
      handleErrors("Enter valid phone number", "phone");
      isValid = false;
    }

    if (!inputs.password) {
      handleErrors("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 7) {
      handleErrors("Minimum password length of 7", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = async () => {
    setLoading(true);
    await signUp({
      email: inputs.email,
      name: inputs.fullname,
      password: inputs.password,
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
    <LinearGradient
      colors={["#FB7EA4", "#FEA2BF", "#FF77B9"]}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image source={images.woman} style={{ width: 300, height: 300 }} />
      </View>
      <KeyboardAwareScrollView
        extraHeight={Platform.OS === "ios" ? 500 : 120}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={[
          styles.form,
          {
            marginTop:
              Platform.OS === "ios"
                ? SIZES.screenHeight * 0.3
                : SIZES.screenHeight * 0.25,
            paddingBottom: Platform.OS === "ios" ? 30 : 10,
          },
        ]}
      >
        <Text style={styles.text}>Sign Up</Text>

        <Input
          maxLength={35}
          placeholder="Enter your username"
          error={errors.fullname}
          onFocus={() => handleErrors(null, "fullname")}
          onChangeText={(text) => handleOnChange(text, "fullname")}
        />
        <Input
          keyboardType="email-address"
          maxLength={35}
          placeholder="Enter your email"
          error={errors.email}
          onFocus={() => handleErrors(null, "email")}
          onChangeText={(text) => handleOnChange(text, "email")}
        />

        <Input password placeholder="Password" />

        <Text
          style={{
            marginTop: 5,
            marginBottom: 20,
            fontFamily: "Lato_Regular",
            color: "#fff",
          }}
        >
          By clicking Agree and Continue below, I agree to Terms of service and
          privacy policy
        </Text>

        <View>
          <AppButton color={COLORS.primary} text="Agree and Register" />
        </View>
        <View style={styles.loginView}>
          <Text style={styles.haveAnAccount}>Have an account?</Text>
          <TouchableOpacity>
            <Button
              mode={"text"}
              labelStyle={styles.resendBtn}
              contentStyle={{}}
              onPress={() => navigation.navigate("Login")}
              uppercase={false}
              theme={{ colors: { primary: "#fff" } }}
            >
              Login
            </Button>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    width: "100%",

    borderRadius: SIZES.borderRadius,
    padding: 20,
  },
  text: {
    marginBottom: 15,
    fontFamily: "Lato_Black",
  },
  imageContainer: {
    position: "absolute",
    top: SIZES.screenHeight * 0.08,
    right: 0,
  },
  // text: {
  //   fontFamily: "Lato_Black",
  // },
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
    fontFamily: "Lato_Regular",
  },
});