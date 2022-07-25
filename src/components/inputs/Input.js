import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { COLORS, SIZES } from "../../utility";

const Input = ({
  label,
  iconName,
  error,
  pin,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(pin);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.primary
              : isFocused
              ? COLORS.borderColorFocused
              : COLORS.borderColor,
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name={iconName}
            size={SIZES.authIconSizes}
            color={COLORS.lightTextGrey}
            style={styles.icon}
          />
          <TextInput
            secureTextEntry={hidePassword}
            placeholderStyle={styles.placeholder}
            autoCorrect={false}
            onFocus={() => {
              onFocus();
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
            styles={styles.textInput}
            {...props}
          />
        </View>
        {pin && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "ios-eye-outline" : "ios-eye-off-outline"}
            size={SIZES.authIconSizes}
            color="grey"
            style={{}}
          />
        )}
      </View>

      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default Input;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  inputContainer: {
    height: 50,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: "center",
    borderWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: SIZES.borderRadius,
  },

  // inputContainer: {
  //   height: 56,
  //   backgroundColor: "#fff",
  //   borderWidth: 1,
  //   borderColor: "#DBD9D9",
  //   alignItems: "center",
  //   paddingHorizontal: 15,
  //   borderRadius: SIZES.borderRadius,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: COLORS.primary,
    fontFamily: "Poppins_Regular",
    fontSize: 18,
  },
  placeholder: {
    fontFamily: "Poppins_Regular",
    fontSize: 18,
  },

  errorMessage: {
    color: COLORS.primary,
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    marginTop: 10,
  },
});
