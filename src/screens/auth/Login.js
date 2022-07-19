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

const Login = () => {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = async () => {
    setLoading(true);
    await signIn(inputs);
    setLoading(false);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
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
          placeholder="username or email"
          error={errors.fullname}
          onFocus={() => handleError(null, "fullname")}
          onChangeText={(text) => handleOnchange(text, "fullname")}
        />
        <Input
          onFocus={() => handleError(null, "password")}
          placeholder="Enter your password"
          error={errors.password}
          password
        />

        <View>
          <AppButton
            color={COLORS.primary}
            text="Agree and Login"
            onPress={() => navigation.navigate("Dashboard")}
          />
        </View>
        <View style={styles.loginView}>
          <Text style={styles.haveAnAccount}>Don't have an account?</Text>
          <TouchableOpacity>
            <Button
              mode={"text"}
              labelStyle={styles.resendBtn}
              contentStyle={{}}
              onPress={() => navigation.navigate("Register")}
              uppercase={false}
              theme={{ colors: { primary: "#fff" } }}
            >
              Register
            </Button>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Login;

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
