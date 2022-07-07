import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { images, SIZES } from "../../utility";

const SocialBtn = ({ onPress = () => {} }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image
          style={[styles.socials, { marginRight: 20 }]}
          source={images.facebookLogo}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.socials} source={images.googleLogo} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialBtn;

const styles = StyleSheet.create({
  socials: {
    width: SIZES.screenWidth * 0.09,
    height: SIZES.screenWidth * 0.09,
  },
});
