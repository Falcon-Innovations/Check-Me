import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { COLORS, images, SIZES } from "../../utility";
import { AppButton, AppStatusBar, DashboardCard } from "../../components";
import { Context as AuthContext } from "../../contexts/userContext";

const data = [
  {
    image: images.fruits,
    title: "Grab a fruit today!",
    description:
      "Fruit and vegitables should be and important part of your daily meal",
  },
  {
    image: images.fruits,
    title: "Grab a fruit today!",
    description:
      "Fruit and vegitables should be and important part of your daily meal",
  },
  {
    image: images.fruits,
    title: "Grab a fruit today!",
    description:
      "Fruit and vegitables should be and important part of your daily meal",
  },
];

const tips = [
  {
    id: 1,
    img: images.tip1,
    title: "Balanced Diet",
  },
  {
    id: 2,
    img: images.tip2,
    title: "Constant Exercise",
  },
  {
    id: 3,
    img: images.tip3,
    title: "Regular Checkup",
  },
];

const Dashboard = ({ data }) => {
  const { t, i18n } = useTranslation();
  const { state, logout } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      "Are you sure you want to logout?",
      "This action will sign you out of this device",
      [
        {
          text: "Confirm",
          onPress: () => logout(),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]
    );
  };

  const fruits =
    "https://res.cloudinary.com/dav5lnlxj/image/upload/v1665910055/fruits_ajpqm8.png";

  const headerImage =
    "https://res.cloudinary.com/dav5lnlxj/image/upload/v1665910049/nurse_ufaz8i.png";
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.greeting}>{t("welcome")}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("ProfileOverview")}
                style={styles.nameContainer}
              >
                <Text style={styles.name}>
                  {state?.user?.name.split(" ").shift().charAt(0) +
                    state?.user?.name.split(" ").pop().charAt(0)}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
              <View style={{ alignSelf: "flex-start" }}>
                <Image
                  style={{
                    height: SIZES.screenHeight * 0.25,
                    width: SIZES.screenWidth * 0.45,
                  }}
                  source={{ uri: headerImage }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <View style={{ marginBottom: 5, width: "90%" }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#fff",
                      fontFamily: "Poppins_Medium",
                      marginBottom: 5,
                    }}
                  >
                    {t("test")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#fff",
                      fontFamily: "Poppins_Regular",
                    }}
                  >
                    {t("feeling")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#fff",
                      fontFamily: "Poppins_Regular",
                    }}
                  >
                    Take today's test
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginTop: SIZES.screenHeight * 0.003,
                  }}
                >
                  <Button
                    mode="contained"
                    labelStyle={styles.testBtn}
                    onPress={() => navigation.navigate("SelfExamination")}
                    // onPress={handleLogout}
                    uppercase={false}
                    theme={{ colors: { primary: "#fff" } }}
                  >
                    {t("btnTest")}
                  </Button>
                </View>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
            <View>
              <Text style={{ fontFamily: "Poppins_SemiBold", fontSize: 14 }}>
                {t("heading")}
              </Text>
              {/* <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                {tips.map((tip) => (
                  <View
                    key={tip.id}
                    style={{ alignItems: "center", marginVertical: 10 }}
                  >
                    <View style={styles.tips}>
                      <Image
                        source={tip.img}
                        style={{
                          width: SIZES.screenWidth * 0.22,
                          height: SIZES.screenWidth * 0.22,
                        }}
                        resizeMode="contain"
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 9.5,
                        fontFamily: "Poppins_Medium",
                        marginTop: 5,
                      }}
                    >
                      {tip.title}
                    </Text>
                  </View>
                ))}
              </View> */}

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
                    source={{ uri: fruits }}
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
                    Grab a fruit today!
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_Regular",
                      fontSize: Platform.OS == "ios" ? 12 : 10,
                    }}
                  >
                    Fruit and vegitables should be and important part of your
                    daily meal
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <DashboardCard />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: SIZES.screenHeight * 0.34,
    paddingHorizontal: 15,

    width: "100%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 18,
  },
  // imageContainer: {
  //   height: SIZES.screenHeight * 0.22,
  //   width: SIZES.screenWidth * 0.3,
  // },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.screenHeight * 0.01,
    marginHorizontal: 10,
  },
  nameContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  name: {
    color: COLORS.primary,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Poppins_Bold",
    fontSize: 16,
  },
  greeting: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins_SemiBold",
  },
  testBtn: {
    color: COLORS.primary,
    fontFamily: "Poppins_Medium",
    justifyContent: "center",
  },
  tips: {
    padding: 10,
    backgroundColor: "#FFE1E1",
    alignItems: "center",
    borderRadius: SIZES.screenWidth,
  },
});
