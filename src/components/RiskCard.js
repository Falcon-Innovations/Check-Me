import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../utility";

const RiskCard = ({ title, description, color, image, onPress }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.screenWidth * 0.05,
        paddingVertical: 12,
        backgroundColor: color,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: SIZES.screenHeight * 0.03,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            width: "80%",
            paddingHorizontal: 6,
          }}
        >
          <Text
            style={{
              marginBottom: Platform.OS == "ios" ? 12 : 8,
              fontSize: 16,
              fontFamily: "Poppins_Medium",
            }}
          >
            {title}
          </Text>
          <Text
            numberOfLines={3}
            style={{ fontFamily: "Poppins_Regular", marginBottom: 10 }}
          >
            {description}
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Text
              style={{
                fontFamily: "Poppins_Medium",
                color: COLORS.primary,
                fontSize: 16,
              }}
            >
              Read More
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            resizeMode="contain"
            source={image}
            style={{
              width: SIZES.screenWidth * 0.18,
              height: SIZES.screenWidth * 0.16,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default RiskCard;

const styles = StyleSheet.create({});
