import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 12,
        width: "90%",
        paddingBottom: 25,
        paddingTop: 10,
        backgroundColor: "#FBE4DD",
        alignSelf: "center",
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 15,
      }}
    >
      <View
        style={{
          paddingHorizontal: 8,
          paddingVertical: 4,
          backgroundColor: "#F3F4FD",
          width: 42,
          height: 40,
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <Image
          source={item.image}
          style={{ width: 35, height: 35, alignSelf: "center" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ width: "90%", paddingHorizontal: 10 }}>
        <Text
          style={{
            fontFamily: "Poppins_SemiBold",
            fontSize: Platform.OS == "ios" ? 12 : 12,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_Regular",
            fontSize: Platform.OS == "ios" ? 12 : 10,
          }}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({});
