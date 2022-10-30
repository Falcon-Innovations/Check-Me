import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import RenderHtml from "react-native-render-html";

import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, SIZES } from "../../utility";
import moment from "moment";

const BlogDetails = ({ route }) => {
  const [like, setLike] = useState(false);
  const { width } = useWindowDimensions();

  const item = route.params;
  console.log("====================================");
  console.log("Items", item);
  console.log("====================================");

  const onLike = () => {
    setLike(!like);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check Me | Breast Cancer Companion \n Read About  : ${
          item.title
        } \nDescription: ${item.content.substring(
          0,
          100
        )}\nRead More by downloading the Check Me App on Google PLay Store
          \n ${item?.photo}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const source = {
    html: `${item?.content}`,
  };

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Blog Details"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          style={{
            flex: 1,
            paddingTop: 20,
            paddingBottom: 20,
            marginHorizontal: 15,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <ImageBackground
              resizeMode="cover"
              source={{ uri: item.photo }}
              style={{
                width: SIZES.screenWidth * 0.9,
                height: SIZES.screenHeight * 0.22,
              }}
              imageStyle={{ borderRadius: 12 }}
            >
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  marginTop: 10,
                  backgroundColor: "#fff",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_Regular",
                    fontSize: 10,
                    color: COLORS.primary,
                  }}
                >
                  {moment(item.createdAt).format("ll")}
                </Text>
              </View>
            </ImageBackground>
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
              {` ${item.author.name}`}
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
                {/* <TouchableOpacity onPress={onLike} style={{ marginRight: 2 }}>
                  <Icon
                    name={like ? "ios-heart" : "heart-outline"}
                    size={24}
                    color={COLORS.primary}
                  />
                </TouchableOpacity> */}
                {/* <Text>{`${item.likes.length} ${
                  item.likes.length > 1 ? "likes" : "like"
                }`}</Text> */}
              </View>
              <TouchableOpacity onPress={onShare}>
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
            <Text style={{ fontFamily: "Poppins_SemiBold", fontSize: 20 }}>
              {item.title}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: SIZES.screenHeight * 0.03,
            }}
          >
            {/* <Text
              style={{
                lineHeight: 23,
                color: "#5A5858",
                fontFamily: "Poppins_Regular",
                fontSize: 15,
                textAlign: "justify",
              }}
            >
              {item.content}
            </Text> */}
          </View>
          <RenderHtml contentWidth={width} source={source} />
          <View style={{ marginTop: 30 }} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({});
