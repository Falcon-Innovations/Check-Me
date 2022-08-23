import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import CalendarPicker from "react-native-calendar-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icons from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";

import { Context as AuthContext } from "../../contexts/authContext";
import {
  AppButton,
  AppStatusBar,
  CustomStatusBar,
  Input,
  PhoneInputField,
} from "../../components";
import { COLORS, images, SIZES } from "../../utility";
import TextAreaInput from "../../components/inputs/TextAreaInput";

const EditProfile = () => {
  const { state, logout } = React.useContext(AuthContext);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const phoneInput = useRef(null);
  const [inputs, setInputs] = useState({
    fullname: "",
    phone: "",
    pin: "",
    kfirmPin: "",
    email: "",
  });

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
  };
  var startDate = selectedDate ? selectedDate.toString() : "";
  startDate = new Date(startDate).toUTCString();
  startDate = startDate.split(" ").slice(0, 4).join(" ");
  const maxDate = new Date(2010, 11, 31);

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Edit Profile"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAwareScrollView
          extraHeight={100}
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          style={{ marginHorizontal: 15, paddingTop: 20, paddingBottom: 30 }}
        >
          <View style={{ alignSelf: "center" }}>
            <ImageBackground
              imageStyle={{ borderRadius: 60 }}
              source={images.doc1}
              style={{
                width: 100,
                height: 100,
              }}
              resizeMode="cover"
            >
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.iconContainer}
              >
                <Icon name="ios-camera-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View>
            <View>
              <Text style={styles.title}>Full Name</Text>
              <Input
                // maxLength={35}
                placeholder="Enter your name"
                keyboardType="default"
                value={state?.user?.name}
                // error={errors.fullname}
                // onFocus={() => handleErrors(null, "fullname")}
                onChangeText={(text) => handleOnChange(text, "fullname")}
              />
            </View>
            <View>
              <Text style={styles.title}>Email Address</Text>
              <Input
                // maxLength={35}
                placeholder="Enter your email"
                keyboardType="default"
                value={state?.user?.email}
                // error={errors.fullname}
                // onFocus={() => handleErrors(null, "fullname")}
                onChangeText={(text) => handleOnChange(text, "email")}
              />
            </View>
            <View>
              <Text style={styles.title}>Phone Number</Text>
              <PhoneInputField
                phoneInput={phoneInput}
                phoneNumber={inputs.phone}
                onChange={(text) => {
                  handleOnChange(text, "phone");
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.title}>Date of Birth</Text>
              <View style={styles.dateContainer}>
                <View style={styles.dateView}>
                  <Text>{startDate}</Text>
                  <TouchableOpacity onPress={toggleModal}>
                    <Icons name="calendar" size={24} color={COLORS.primary} />
                  </TouchableOpacity>
                </View>
              </View>

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
                      maxDate={maxDate}
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
            <View>
              <Text style={styles.title}>Tell us about you</Text>
              <TextAreaInput />
            </View>

            <View style={{ marginTop: 20 }}>
              <AppButton
                text="Update Info"
                color={COLORS.primary}
                //   disabled={loading}
                //   onPress={register}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

const deviceWidth = Dimensions.get("window").width;
export default EditProfile;

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
});
