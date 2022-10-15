import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Delete from "react-native-vector-icons/MaterialCommunityIcons";
import Edit from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Icons from "react-native-vector-icons/Ionicons";
import { AppButton, AppStatusBar } from "../../components";
import { COLORS, images, SIZES } from "../../utility";
import { Colors } from "react-native-paper";

const MenstraulCycle = () => {
  const navigation = useNavigation();
  const cycle = [
    {
      days: "5.5 Days",
      icon: <Icons name="ios-water" color="#fff" size={20} />,
      desc: "Average Period",
    },
    {
      days: "28 Days",
      icon: <Icons name="ios-sync" color="#fff" size={20} />,
      desc: "Average Cycle",
    },
  ];
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View
        style={{
          height: SIZES.screenHeight * 0.09,
          width: "100%",
          backgroundColor: COLORS.primary,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Icon
            name="arrow-back-ios"
            size={25}
            color="#fff"
            style={{ marginLeft: 16 }}
          />
          <Text
            style={{
              justifyContent: "center",
              fontSize: 18,
              fontFamily: "Poppins_Medium",
              color: "#fff",
              marginLeft: SIZES.screenWidth * 0.25,
            }}
          >
            Your Cycles
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          contentContainerStyle={{ marginHorizontal: 14, paddingVertical: 18 }}
        >
          {cycle.length < 1 ? (
            <View
              style={{
                justifyContent: "center",
                marginTop: SIZES.screenHeight * 0.1,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={images.menstraulCycle}
                  style={{
                    width: SIZES.screenWidth * 0.4,
                    height: SIZES.screenHeight * 0.15,
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text
                  style={{
                    fontFamily: "Poppins_Regular",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  You have no cycles, please add one. Keep track of your period
                  and cycle today and lets help you live a healthy life
                </Text>
              </View>
              <View style={{ marginTop: SIZES.screenHeight * 0.05 }}>
                <AppButton
                  text="Add Cycle"
                  color={COLORS.primary}
                  onPress={() => navigation.navigate("SetCycle")}
                />
              </View>
            </View>
          ) : (
            <View style={{ marginTop: 4 }}>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontFamily: "Poppins_Regular", fontSize: 12 }}>
                  Current Cycle
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_Medium",
                    fontSize: 16,
                    marginTop: 6,
                  }}
                >
                  Started 4 September (15 Days)
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: SIZES.screenHeight * 0.05,
                }}
              >
                {cycle.map((cy) => (
                  <View
                    key={cy.days}
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 8,
                      backgroundColor: "#FFECE9",
                      marginHorizontal: SIZES.screenWidth * 0.03,
                      borderRadius: 6,
                      width: "43%",

                      marginBottom: 20,
                    }}
                  >
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 40,

                        backgroundColor: COLORS.primary,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "flex-end",
                      }}
                    >
                      {cy.icon}
                    </View>
                    <View style={{ paddingLeft: 6, paddingBottom: 4 }}>
                      <Text
                        style={{
                          fontFamily: "Poppins_Medium",
                          fontSize: 16,
                          color: COLORS.textColor,
                        }}
                      >
                        {cy.days}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Poppins_Regular",
                          fontSize: 11,
                          color: COLORS.textColor,
                        }}
                      >
                        {cy.desc}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
              <View
                style={{
                  paddingHorizontal: 18,
                  marginTop: SIZES.screenHeight * 0.03,
                }}
              >
                <Text style={{ fontFamily: "Poppins_Medium", fontSize: 15 }}>
                  Cycle Information
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontFamily: "Poppins_Medium",
                        fontSize: 16,
                        marginRight: 14,
                      }}
                    >
                      Period
                    </Text>
                    <Text style={{ fontFamily: "Poppins_Regular" }}>
                      5 days
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontFamily: "Poppins_Medium" }} t>
                      Day 15
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ marginRight: 14 }}>
                      <Edit name="edit" size={24} color="#0000ff" />
                    </View>
                    <View>
                      <Icon
                        name="delete-outline"
                        size={24}
                        color={COLORS.primary}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default MenstraulCycle;

const styles = StyleSheet.create({});
