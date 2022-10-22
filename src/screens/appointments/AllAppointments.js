import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { getMyAppointments } from "../../api/appointments";
import { COLORS, SIZES } from "../../utility";
import {
  AppButton,
  AppointmentsCard,
  AppStatusBar,
  CustomStatusBar,
} from "../../components";

const AllAppointments = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const { loading, data, error } = getMyAppointments();

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar />
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, marginHorizontal: 15, paddingVertical: 10 }}>
          <View style={{ marginTop: 10, marginBottom: 20 }}>
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
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            <Text style={{ fontFamily: "Poppins_Medium" }}>
              Welcome to your list of appointments
            </Text>
            {data?.data?.docs?.length > 0 ? (
              <View style={{ marginTop: 10 }}>
                {data?.data?.docs?.map((item, index) => (
                  <AppointmentsCard
                    onPress={() =>
                      navigation.navigate("AppointmentDetails", item)
                    }
                    key={index}
                    title={item.title}
                    desc={item.description}
                    time={
                      new Date(item.time).getHours() >= 0 &&
                      new Date(item.time).getHours() < 12
                        ? `${item.time} pm`
                        : `${item.time} am`
                    }
                    status={item.status}
                    doc={
                      !item.recipient.name
                        ? item.recipient.email
                        : item.recipient.name
                    }
                    date={new Date(item.day)
                      .toUTCString()
                      .split(" ")
                      .slice(0, 4)
                      .join(" ")}
                  />
                ))}
              </View>
            ) : (
              <View style={{ marginTop: SIZES.screenHeight * 0.05 }}>
                <Text style={{ fontFamily: "Poppins_Regular" }}>
                  Sorry!!!, you have no appointments yet. Please book one.
                </Text>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dav5lnlxj/image/upload/v1666400399/calendara_pm8npo.png",
                    }}
                    style={{
                      height: 150,
                      width: 150,
                    }}
                  />
                </View>
                <View style={{ marginTop: 20, marginBottom: 30 }}>
                  <AppButton
                    text="Book Appointment"
                    color={COLORS.primary}
                    onPress={() => navigation.navigate("Specialists")}
                  />
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AllAppointments;

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
    marginBottom: 20,
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
    marginBottom: 10,
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
