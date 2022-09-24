import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Entypo";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../../utility";

const DetailHospital = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params;

  return (
    <>
      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          source={data.image}
          style={{ width: "100%", height: SIZES.screenHeight * 0.35 }}
        >
          <View
            style={{
              paddingTop: SIZES.screenHeight * 0.06,
              paddingHorizontal: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                paddingVertical: 4,
                paddingHorizontal: 6,
                backgroundColor: "#E4E4E4",
                borderRadius: 4,
              }}
            >
              <Icon name="ios-arrow-back-sharp" color="#848484" size={24} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 6,
                  backgroundColor: "#E4E4E4",
                  borderRadius: 4,
                  marginRight: SIZES.screenWidth * 0.04,
                }}
              >
                <Icon name="ios-share-outline" color="#848484" size={24} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 6,
                  backgroundColor: "#E4E4E4",
                  borderRadius: 4,
                }}
              >
                <Icon name="heart-outline" color="#848484" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            marginHorizontal: SIZES.screenWidth * 0.05,
            marginTop: SIZES.screenHeight * 0.02,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_SemiBold",
                fontSize: 16,
                color: COLORS.primary,
              }}
              numberOfLines={1}
            >
              {data.name}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons name="star" size={22} color="#fdcc0d" />
              <Text>4.9(80 reviews)</Text>
            </View>
          </View>

          {/* <Text
            style={{
              fontFamily: "Poppins_Regular",
              fontSize: 14,
              color: "#AEADAD",
              marginBottom: 4,
            }}
            numberOfLines={1}
          >
            Breast Cancer
          </Text> */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 4,
            }}
          >
            <Icon name="ios-location-outline" size={18} color="#222222" />
            <Text
              style={{
                fontFamily: "Poppins_Regular",
                fontSize: 13,
                color: "#222222",
                marginLeft: 6,
              }}
              numberOfLines={1}
            >
              {data.location}
            </Text>
          </View>
          <View style={{ marginTop: 15, marginBottom: 20 }}>
            <Divider orientation="horizontal" width={1.5} color="#d3d3d3" />
          </View>
          <View>
            <Text style={{ fontFamily: "Poppins_Medium", fontSize: 16 }}>
              About Hopital
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_Regular",
                lineHeight: 22,

                marginTop: 10,
                color: "#5A5858",
              }}
            >
              {data.description}
            </Text>
          </View>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Divider orientation="horizontal" width={1.5} color="#d3d3d3" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_Medium",
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              Specialities
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                // flexWrap: "wrap",
                alignItems: "center",
                paddingBottom: SIZES.screenHeight * 0.03,
                justifyContent: "center",
                alignSelf: "flex-start",
              }}
            >
              {data.services
                .map((service, index) => (
                  <View
                    key={index}
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 8,
                      backgroundColor: "#FFE2DC",
                      marginHorizontal: 3,
                      borderRadius: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Poppins_Medium",
                        color: COLORS.primary,
                      }}
                    >
                      {service.name}
                    </Text>
                  </View>
                ))
                .slice(0, 3)}
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_Medium",
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              Service Fee
            </Text>
          </View>
        </View>
      </ScrollView>
      <FAB
        icon="calendar-month"
        style={styles.fab}
        label="Book Appointment"
        onPress={() => console.log("Pressed")}
      />
    </>
  );
};

export default DetailHospital;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 20,
    backgroundColor: COLORS.primary,
  },
});
