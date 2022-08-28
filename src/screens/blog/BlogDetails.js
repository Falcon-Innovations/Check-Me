import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, SIZES } from "../../utility";

const BlogDetails = ({ route }) => {
  const item = route.params;
  console.log("====================================");
  console.log("Items", item);
  console.log("====================================");
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
          <View style={{ alignItems: "center" }}>
            <Image
              resizeMode="cover"
              source={item.image}
              style={{
                width: SIZES.screenWidth * 0.9,
                height: SIZES.screenHeight * 0.25,
                borderRadius: 12,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({});
