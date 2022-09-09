import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import Icon from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  AppButton,
  AppStatusBar,
  CustomStatusBar,
  Input,
} from "../../components";
import { COLORS, SIZES } from "../../utility";
import moment from "moment";

const SetCycle = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [visible, setVisible] = useState(false);
  const [period, setPeriod] = useState("");

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === "END_DATE") {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  let start = new Date(selectedStartDate).getTime();
  let end = new Date(selectedEndDate).getTime();

  let timeDiff = end - start;
  let numOfDays = timeDiff / (1000 * 3600 * 24);

  console.log("====================================");
  console.log(timeDiff);
  console.log("====================================");

  const startDate = moment(selectedStartDate).format("ll");
  const endDate = moment(selectedEndDate).format("ll");

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          //   extraHeight={100}
          enableOnAndroid={true}
          style={{ marginHorizontal: 15 }}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text
            style={{
              paddingTop: 20,
              fontFamily: "Poppins_Medium",
              fontSize: 18,
            }}
          >
            Set Your Menstrual Cycle Today
          </Text>
          <View
            style={{
              marginTop: SIZES.screenHeight * 0.01,
              paddingHorizontal: 15,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: visible ? 2 : 14,
                }}
              >
                <Text style={{ fontFamily: "Poppins_Medium", fontSize: 16 }}>
                  Set your cycle
                </Text>
                <TouchableOpacity
                  style={{ marginLeft: 2, padding: 8 }}
                  onPress={() => setVisible(!visible)}
                >
                  <Icon
                    name="ios-information-circle-outline"
                    size={20}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
              </View>
              {visible && (
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 12,
                    backgroundColor: "#d3d3d3",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 8,
                    marginTop: 15,
                    marginBottom: 24,
                  }}
                >
                  <Icon name="ios-information-circle-outline" size={20} />
                  <Text
                    style={{
                      paddingRight: SIZES.screenWidth * 0.08,
                      paddingLeft: 12,
                      lineHeight: 20,
                      fontFamily: "Poppins_Regular",
                    }}
                  >
                    Your cycle is the number of days it takes for you to see
                    your period
                  </Text>
                </View>
              )}
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={new Date(2018, 1, 1)}
                maxDate={new Date(2050, 6, 3)}
                previousTitle="prev"
                nextTitle="Next"
                selectedDayColor={COLORS.primary}
                todayBackgroundColor="#FFE1E1"
                selectedDayTextColor="#000000"
                scaleFactor={375}
                textStyle={{
                  fontFamily: "Poppins_Regular",
                  color: "#000000",
                }}
                onDateChange={onDateChange}
              />
              <View style={{ marginTop: SIZES.screenHeight * 0.03 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 15,
                  }}
                >
                  <Text style={styles.textStyle}>Selected Start Date :</Text>
                  <Text style={styles.textDate}>
                    {selectedStartDate ? startDate.toString() : ""}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.textStyle}>Selected End Date :</Text>
                  <Text style={styles.textDate}>
                    {selectedEndDate ? endDate.toString() : ""}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 15,
                  }}
                >
                  <Text style={styles.textStyle}>Cycle Duration</Text>
                  <Text style={styles.textDate}>{`${numOfDays} Day(s)`}</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontFamily: "Poppins_Medium", fontSize: 16 }}>
                Set your period
              </Text>
              <Text style={{ fontFamily: "Poppins_Regular", fontSize: 12 }}>
                Enter the estimated number of days your period last
              </Text>
              <View style={{ marginTop: 12 }}>
                <Input
                  placeholder="Number of days e.g 5"
                  keyboardType="numeric"
                  defaultValue={period}
                  onChangeText={(text) => setPeriod(text)}
                />
              </View>
              <View style={{ marginTop: SIZES.screenHeight * 0.05 }}>
                <AppButton
                  text="Save Cycle"
                  color={COLORS.primary}
                  //   onPress={() => navigation.navigate("SetCycle")}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default SetCycle;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Poppins_Medium",
    fontSize: 16,
  },
  textDate: {
    fontFamily: "Poppins_Regular",
  },
});
