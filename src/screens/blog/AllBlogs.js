import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, images, SIZES } from "../../utility";

const blogData = [
  {
    id: 1,
    date: new Date(),
    author: "Francis",
    image: images.doc1,
    title: "Breast Cancer and its effect to humanity",
    details:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout, the final text replacing the false text as soon as it is ready or the layout is completed. Generally, a false Latin text, Lorem ipsum or Lipsum, is used.",
    likes: 25,
  },
  {
    id: 2,
    date: new Date(),
    author: "Francis",
    image: images.doc3,
    title: "Breast Cancer and its effect to humanity",
    details:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout, the final text replacing the false text as soon as it is ready or the layout is completed. Generally, a false Latin text, Lorem ipsum or Lipsum, is used.",
    likes: 20,
  },
  {
    id: 3,
    date: new Date(),
    author: "Francis",
    image: images.doc2,
    title: "Breast Cancer and its effect to humanity",
    details:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout, the final text replacing the false text as soon as it is ready or the layout is completed. Generally, a false Latin text, Lorem ipsum or Lipsum, is used.",
    likes: 0,
  },
];

const AllBlogs = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("BlogDetails", item)}
        key={item.id}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 8 }}
            resizeMode="cover"
            source={item.image}
            style={{
              width: SIZES.screenWidth * 0.4,
              height: SIZES.screenWidth * 0.3,
            }}
          ></ImageBackground>
        </View>
        <View style={{ paddingLeft: 20, marginRight: 14 }}>
          <Text
            style={{
              color: "gray",
              fontFamily: "Poppins_Regular",
              fontSize: 12,
              marginBottom: 8,
              width: SIZES.screenWidth * 0.4,
            }}
          >
            {item.date.toString("")}
          </Text>
          <Text
            numberOfLines={3}
            style={{
              width: SIZES.screenWidth * 0.51,
              paddingRight: 5,
              fontFamily: "Poppins_SemiBold",
              color: COLORS.textColor,
              fontSize: 15.5,
            }}
          >
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <TouchableOpacity>
                <Icon name="ios-heart-outline" size={24} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Poppins_Regular",
                  marginLeft: 8,
                  color: "gray",
                }}
              >
                {`${item.likes} ${item.likes > 0 ? "likes" : "like"}`}
              </Text>
            </View>
            <Icon name="ios-share-outline" size={24} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"News Feed"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 20 }}
        >
          <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
            <Searchbar
              placeholder="Search News"
              placeholderTextColor="#D2D1D1"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                elevation: 0,
                borderWidth: 0.5,
                borderColor: "#EB3E95",
              }}
              inputStyle={{
                fontSize: 14,
                fontFamily: "Poppins_Regular",
              }}
              iconColor="#D2D1D1"
            />
          </View>
          <FlatList
            data={blogData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AllBlogs;

const styles = StyleSheet.create({});
