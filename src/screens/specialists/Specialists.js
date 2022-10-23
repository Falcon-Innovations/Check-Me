import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { COLORS, config, images, SIZES } from "../../utility";
import { AppStatusBar, CustomStatusBar } from "../../components";
import useFetch from "../../hooks/useFetch";
import { useSpecialists } from "../../api/specialist";
import SimpleLoader from "../../components/utils/SimpleLoader";
import Error from "../../components/utils/Error";
import useDataFetching from "../../hooks/useFetchData";

const Specialists = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  // const { loading, data, error, fetchData } = useSpecialists();

  // const { loading, data, error } = useFetch(url);
  const [loading, error, data, fetchData] = useDataFetching(
    `${config.app.api_url}/specialists`
  );
  useEffect(() => {
    const updateData = navigation.addListener("focus", () => {
      fetchData();
    });
    return updateData;
  }, [navigation]);

  // if (loading) {
  //   return <SimpleLoader />;
  // }

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar />
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, marginHorizontal: 10, paddingVertical: 10 }}>
          <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
            <Searchbar
              placeholder="Search Specialists"
              placeholderTextColor="#D2D1D1"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                elevation: 0,
                borderWidth: 0.5,
                borderColor: COLORS.borderCardColor,
              }}
              inputStyle={{
                fontSize: 14,
                fontFamily: "Poppins_Regular",
              }}
              iconColor="#D2D1D1"
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={fetchData} />
            }
          >
            <View>
              <Text style={{ fontFamily: "Poppins_Medium", color: "#333333" }}>
                Get connected with the best specialists
              </Text>
              {loading || error ? (
                <>
                  {loading === true && (
                    <View
                      style={{
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "center",
                      }}
                    >
                      <SimpleLoader color={COLORS.primary} />
                    </View>
                  )}
                  {error && (
                    <View
                      style={{
                        margin: 20,
                        backgroundColor: COLORS.danger,
                        borderRadius: 8,
                        paddingLeft: 10,
                      }}
                    >
                      <Error error={error} />
                    </View>
                  )}
                </>
              ) : (
                <>
                  {data?.data?.docs?.length > 0 ? (
                    <View style={styles.card}>
                      {data?.data?.docs?.map((item) => (
                        <TouchableOpacity
                          key={item._id}
                          style={styles.cardContent}
                          onPress={() =>
                            navigation.navigate("SpecialistDetails", item)
                          }
                        >
                          <View style={{ paddingHorizontal: 4 }}>
                            <View>
                              <Image
                                source={{ uri: item.avatar }}
                                style={styles.imge}
                                resizeMode="cover"
                              />
                            </View>
                            <View style={{ marginTop: 8 }}>
                              <Text
                                numberOfLines={1}
                                style={{
                                  fontFamily: "Poppins_SemiBold",
                                  fontSize: 14,
                                  color: COLORS.primary,
                                  marginBottom: 2,
                                }}
                              >
                                {` ${item.firstName} ${item.lastName}`}
                              </Text>
                              <Text
                                style={{
                                  width: SIZES.screenWidth * 0.3,
                                  fontFamily: "Poppins_Regular",
                                  fontSize: 12,
                                  color: "#AEADAD",
                                }}
                                numberOfLines={1}
                              >
                                {item.speciality}
                              </Text>
                              <Text
                                style={{
                                  width: SIZES.screenWidth * 0.3,
                                  fontFamily: "Poppins_Regular",
                                  fontSize: 13,
                                }}
                                numberOfLines={1}
                              >
                                {item.town}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      ))}

                      {/* ) : (
                 
                  )}
                </> */}
                    </View>
                  ) : (
                    <View>
                      <Text>
                        Please be patient, specialist are bieng signed up
                      </Text>
                    </View>
                  )}
                </>
              )}

              {/* <FlatList
                columnWrapperStyle={{ marginHorizontal: 5 }}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingBottom: SIZES.screenHeight * 0.076,
                }}
                data={dummyData}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                  <View
                    style={{
                      marginHorizontal: 10,
                      backgroundColor: "#FAFAFA",
                      padding: 10,
                      borderRadius: 8,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      marginBottom: 10,
                      elevation: 2,
                    }}
                  >
                    <View style={{ paddingHorizontal: 4 }}>
                      <View>
                        <Image
                          source={item.image}
                          style={{
                            width: SIZES.screenWidth * 0.35,
                            height: SIZES.screenWidth * 0.34,
                            borderRadius: 8,
                          }}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{ marginHorizontal: 5 }}>
                        <Text>{item.name}</Text>
                        <Text
                          style={{ width: SIZES.screenWidth * 0.3 }}
                          numberOfLines={1}
                        >
                          {item.speciality.join(",")}
                        </Text>
                        <Text
                          style={{ width: SIZES.screenWidth * 0.3 }}
                          numberOfLines={1}
                        >
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              /> */}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Specialists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    flex: 1,
    paddingTop: SIZES.screenHeight * 0.02,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingBottom: SIZES.screenHeight * 0.03,
    justifyContent: "center",
  },
  cardContent: {
    marginHorizontal: 7,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: "#FAFAFA",
    width: SIZES.screenWidth * 0.43,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 20,
    elevation: 2,
    alignItems: "center",
  },
  imge: {
    width: SIZES.screenWidth * 0.38,
    height: SIZES.screenWidth * 0.38,
    borderRadius: 12,
    overflow: "hidden",
  },
});
