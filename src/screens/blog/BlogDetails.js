import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, SIZES } from "../../utility";

const BlogDetails = ({ route }) => {
  const [like, setLike] = useState(false);

  const item = route.params;
  console.log("====================================");
  console.log("Items", item);
  console.log("====================================");

  const onLike = () => {
    setLike(!like);
  };

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Blog Details"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          style={{
            flex: 1,
            paddingTop: 15,
            paddingBottom: 20,
            marginHorizontal: 15,
          }}
        >
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <Image
              resizeMode="cover"
              source={item.image}
              style={{
                width: SIZES.screenWidth * 0.9,
                height: SIZES.screenHeight * 0.22,
                borderRadius: 12,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginTop: 8,
            }}
          >
            <Text style={{ fontFamily: "Poppins_Medium", fontSize: 15 }}>
              <Text style={{ color: "gray" }}>By</Text>
              {` ${item.author}`}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 15,
                }}
              >
                <TouchableOpacity onPress={onLike} style={{ marginRight: 2 }}>
                  <Icon
                    name={like ? "ios-heart" : "heart-outline"}
                    size={24}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
                <Text>{`${item.likes} ${
                  item.likes > 1 ? "likes" : "like"
                }`}</Text>
              </View>
              <TouchableOpacity>
                <Icon name="ios-share-outline" size={24} color="#333333" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: SIZES.screenHeight * 0.03,
            }}
          >
            <Text
              style={{
                lineHeight: 23,
                color: "#5A5858",
                fontFamily: "Poppins_Regular",
                fontSize: 14,
              }}
            >
              {item.details}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({});
