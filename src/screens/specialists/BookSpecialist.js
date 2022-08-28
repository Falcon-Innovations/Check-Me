import {
  Button,
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import CalendarPicker from "react-native-calendar-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icons from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";

import {
  AppButton,
  AppStatusBar,
  CustomStatusBar,
  Input,
} from "../../components";
import { COLORS } from "../../utility";
import TextAreaInput from "../../components/inputs/TextAreaInput";
import { sendEmail } from "./SendEmail";

const BookSpecialist = ({ route }) => {
  const item = route.params;

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const hidePicker = () => {
    setIsPickerShow(false);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  // const { state, updateProfile } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [inputs, setInputs] = useState({
    fullname: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (text, input) => {
    console.log(text);
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  var startDate = selectedDate ? selectedDate.toString() : "No date selected";
  startDate = new Date(startDate).toUTCString();
  startDate = startDate.split(" ").slice(0, 4).join(" ");
  // const maxDate = new Date(2010, 11, 31);

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraHeight={120}
          style={{ marginHorizontal: 15, paddingVertical: 15 }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Poppins_Medium",
                color: COLORS.textColor,
                fontSize: 16,
              }}
            >
              Please fill in in the information below to book an appointment.{" "}
            </Text>
          </View>
          <View style={{ marginTop: 25 }}>
            <View style={{ marginBottom: 10 }}>
              <Input
                // maxLength={35}
                placeholder="Full Name"
                keyboardType="default"
                // defaultValue={state?.user?.name}
                // error={errors.fullname}
                // onFocus={() => handleErrors(null, "fullname")}
                onChangeText={(text) => handleOnChange(text, "name")}
              />
            </View>

            <View style={{ marginBottom: 10 }}>
              <Input
                // maxLength={35}
                placeholder="Email"
                keyboardType="default"
                // defaultValue={state?.user?.name}
                // error={errors.fullname}
                // onFocus={() => handleErrors(null, "fullname")}
                onChangeText={(text) => handleOnChange(text, "email")}
              />
            </View>

            <View style={{ marginBottom: 10 }}>
              <Input
                // maxLength={35}
                placeholder="Subject of your message"
                Subject
                keyboardType="default"
                // defaultValue={state?.user?.name}
                // error={errors.fullname}
                // onFocus={() => handleErrors(null, "fullname")}
                onChangeText={(text) => handleOnChange(text, "subject")}
              />
            </View>
            <View style={{ marginBottom: 25 }}>
              <TextAreaInput
                placeholder="Message"
                // defaultValue={state?.user?.bio}
                onChangeText={(text) => handleOnChange(text, "message")}
              />
            </View>

            <View style={styles.container}>
              {/* <Text style={styles.title}>Date of Birth</Text> */}
              <View style={styles.dateContainer}>
                <View style={styles.dateView}>
                  <Text>{startDate}</Text>
                  <TouchableOpacity onPress={toggleModal}>
                    <Icons name="calendar" size={24} color={COLORS.primary} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.dateContainer}>
                <View style={styles.dateView}>
                  <Text>
                    {date.toLocaleTimeString("Us", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                  <TouchableOpacity onPress={showPicker}>
                    <Icon
                      name="ios-time-outline"
                      size={28}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {isPickerShow && (
                <View style={{}}>
                  <TouchableOpacity onPress={hidePicker}>
                    <Text
                      style={{
                        alignSelf: "flex-end",
                        fontFamily: "Poppins_Medium",
                        fontSize: 16,
                        paddingHorizontal: 8,
                        color: COLORS.primary,
                      }}
                    >
                      Done
                    </Text>
                  </TouchableOpacity>
                  <DateTimePicker
                    value={date}
                    mode={"time"}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    is24Hour={true}
                    onChange={onChange}
                    style={styles.datePicker}
                  />
                </View>
              )}

              <Modal isVisible={isModalVisible} animationType="slide">
                <View style={{ backgroundColor: "#fff", borderRadius: 8 }}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 12,
                    }}
                  >
                    <CalendarPicker
                      width={deviceWidth - 50}
                      onDateChange={onDateChange}
                      selectedDayColor={COLORS.primary}
                      selectedDayTextColor="#FFFFFF"
                      // maxDate={maxDate}
                      textStyle={{
                        fontFamily: "Poppins_Regular",
                        color: "#000000",
                      }}
                    />
                  </View>

                  <View style={{ paddingVertical: 10 }}>
                    <Button
                      color={COLORS.primary}
                      title="Set Date"
                      onPress={toggleModal}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          </View>

          <View style={{ marginTop: 20, marginBottom: 30 }}>
            <AppButton
              text="Update Info"
              color={COLORS.primary}
              // disabled={loading}
              onPress={() =>
                sendEmail(
                  `${item.email}`,
                  "We need your feedback",
                  "UserName, we need 2 minutes of your time to fill this quick survey [link]",
                  { cc: "user@domain.com; user2@domain.com; userx@domain1.com" }
                ).then(() => {
                  console.log("Your message was successfully sent!");
                })
              }
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

const deviceWidth = Dimensions.get("window").width;
export default BookSpecialist;

const styles = StyleSheet.create({
  iconContainer: {
    paddingVertical: 6,
    paddingHorizontal: 7,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    alignSelf: "flex-end",
    position: "absolute",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  dateContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 15,

    borderColor: "#DBD9D9",
  },
  dateView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  title: {
    fontFamily: "Poppins_Regular",
    marginBottom: 6,
    marginLeft: 4,
  },
  datePicker: {
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
