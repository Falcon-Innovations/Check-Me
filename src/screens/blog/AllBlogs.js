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
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import ContentLoader, { Instagram } from "react-content-loader";

import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, images, SIZES } from "../../utility";
import useFetch from "../../hooks/useFetch";
import moment from "moment";
import SimpleLoader from "../../components/utils/SimpleLoader";

const AllBlogs = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [like, setLike] = useState(false);
  const onChangeSearch = (query) => setSearchQuery(query);

  const url = "https://check-me-backend.herokuapp.com/api/v1/articles";

  const { loading, data, error, fetched } = useFetch(url);

  const onLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    const fetchBlogs = navigation.addListener("focus", () => {});
    return fetchBlogs;
  }, [navigation]);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("BlogDetails", item)}
        key={index}
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
            source={{ uri: item.photo }}
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
            {moment(item.createdAt).format("ll")}
          </Text>
          <Text
            numberOfLines={3}
            style={{
              width: SIZES.screenWidth * 0.49,
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
                marginRight: 18,
              }}
            >
              <TouchableOpacity onPress={onLike} style={{ marginRight: 2 }}>
                <Icon
                  name={like ? "ios-heart" : "heart-outline"}
                  size={24}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Poppins_Regular",
                  marginLeft: 5,
                  color: "gray",
                }}
              >
                {`${item.likes.length} ${
                  item.likes.lenght > 1 ? "likes" : "like"
                }`}
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
          {data?.data?.docs ? (
            <FlatList
              data={data?.data?.docs}
              renderItem={renderItem}
              keyExtractor={(index) => index}
            />
          ) : (
            <SimpleLoader />
          )}
          {/* <FlatList
            data={data?.data?.docs}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          /> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AllBlogs;

const styles = StyleSheet.create({});
