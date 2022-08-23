import { View, StyleSheet, Dimensions } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const PhoneInputField = ({ phoneNumber, phoneInput, onChange, ...rest }) => {
  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="CM"
        layout="first"
        placeholder="Phone number"
        autoFocus={false}
        // withShadow
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={onChange}
        {...rest}
      />
    </View>
  );
};

export default PhoneInputField;

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  phoneContainer: {
    width: width - 35,
    height: 55,
    marginBottom: 15,
    borderRadius: 12,
    borderColor: "#DBD9D9",
    borderWidth: 1,
  },
  textInput: {
    paddingVertical: 0,
    width: width - 40,
    height: 50,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    paddingHorizontal: 20,
    borderRadius: 12,

    shadowColor: "#000",
  },
});
