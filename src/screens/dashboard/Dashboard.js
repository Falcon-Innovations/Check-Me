import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import { COLORS, images, SIZES } from "../../utility";
import { AppButton } from "../../components";

const Dashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome!!</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>fr</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{
                height: SIZES.screenHeight * 0.2,
                width: SIZES.screenWidth * 0.423,
              }}
              source={images.nurse}
              resizeMode="contain"
            />
          </View>
          <View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontFamily: "Lato_Black",
                  marginBottom: 5,
                }}
              >
                Do your own test
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#fff",
                  fontFamily: "Lato_Regular",
                }}
              >
                How do you feel today?
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#fff",
                  fontFamily: "Lato_Regular",
                }}
              >
                Take today's test
              </Text>
            </View>
            <View style={{ alignSelf: "flex-start", marginTop: 10 }}>
              <Button
                style={{ padding: 0 }}
                mode="contained"
                labelStyle={styles.testBtn}
                // onPress={() => navigation.navigate("Login")}
                uppercase={false}
                theme={{ colors: { primary: "#fff" } }}
              >
                Test now
              </Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: SIZES.screenHeight * 0.28,
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
  },
  greeting: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Lato_Bold",
  },
  testBtn: {
    color: COLORS.primary,
    fontFamily: "Lato_Black",
    justifyContent: "center",
  },
});
