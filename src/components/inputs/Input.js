import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { COLORS, SIZES } from "../../utility";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.primary
              : isFocused
              ? COLORS.primary
              : "#DBD9D9",
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
        {password && (
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

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    height: 56,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DBD9D9",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: SIZES.borderRadius,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: COLORS.primary,
    fontFamily: "Lato_Regular",
    fontSize: 18,
  },
  placeholder: {
    fontFamily: "Lato_Regular",
    fontSize: 18,
  },

  errorMessage: {
    color: COLORS.primary,
    fontFamily: "Lato_Regular",
    fontSize: 12,
    marginTop: 10,
  },
});
