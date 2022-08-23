import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  AppButton,
  AppStatusBar,
  CustomStatusBar,
  Input,
} from "../../components";
import { COLORS } from "../../utility";

const ResetPassword = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    phone: "",
    pass: "",
    newPass: "",
    confirmNewPass: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleErrors = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Reset Password"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={{ marginHorizontal: 15, paddingVertical: 15 }}>
          <Text
            style={{
              marginTop: 15,
              marginBottom: 20,
              marginLeft: 4,
              fontFamily: "Poppins_Regular",
            }}
          >
            Enter your old and new password to reset your password
          </Text>
          <View>
            <Input
              placeholder="Enter Old password"
              error={errors.pass}
              pin
              onFocus={() => handleErrors(null, "pass")}
              onChangeText={(text) => handleOnChange(text, "pass")}
            />
            <Input
              placeholder="Enter new password"
              error={errors.newPass}
              pin
              onFocus={() => handleErrors(null, "newPass")}
              onChangeText={(text) => handleOnChange(text, "newPass")}
            />
            <Input
              placeholder="Confirm new password"
              error={errors.confirmNewPass}
              pin
              onFocus={() => handleErrors(null, "confirmNewPass")}
              onChangeText={(text) => handleOnChange(text, "confirmNewPass")}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <AppButton
              text="Reset Password"
              color={COLORS.primary}
              //   disabled={loading}
              //   onPress={register}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
