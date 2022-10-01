import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { useTranslation } from "react-i18next";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import "../../../assets/i18n/i18n";

import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS } from "../../utility";

const Settings = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const { t, i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useState(i18n.language);

  const [sessionLocale, setSessionLocale] = React.useState(null);

  const storeSessionLocale = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(currentLanguage, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const naviagateToPassword = () => {
    navigation.navigate("ResetPassword");
  };

  const settings = [
    {
      title: t("resetPass"),
      screen: naviagateToPassword,
    },
    {
      title: t("changeLang"),
      screen: toggleModal,
    },
  ];

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"settings"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={{ marginHorizontal: 15, paddingVertical: 20 }}>
          <View>
            {settings.map((setting) => (
              <TouchableOpacity
                onPress={setting.screen}
                key={setting.title}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#F1B9D6",
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontFamily: "Poppins_Regular", fontSize: 14 }}>
                    {setting.title}
                  </Text>
                  <Icon
                    name="md-chevron-forward-sharp"
                    size={28}
                    color={"#8A8A8A"}
                  />
                </View>
              </TouchableOpacity>
            ))}

            <Modal isVisible={isModalVisible} animationType="slide">
              <View style={{ backgroundColor: "#fff", borderRadius: 8 }}>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 12,
                  }}
                >
                  <Pressable
                    onPress={() => changeLanguage("en")}
                    style={{
                      backgroundColor:
                        currentLanguage === "en" ? "#33A850" : "#d3d3d3",
                      padding: 20,
                    }}
                  >
                    <Text>{t("enLang")}</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => changeLanguage("fr")}
                    style={{
                      backgroundColor:
                        currentLanguage === "fr" ? "#33A850" : "#d3d3d3",
                      padding: 20,
                    }}
                  >
                    <Text>{t("frLang")}</Text>
                  </Pressable>
                </View>
                <View style={{ paddingVertical: 10, alignSelf: "center" }}>
                  <Button
                    color={COLORS.primary}
                    title=" Set Language "
                    onPress={toggleModal}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#000",
    paddingVertical: 4,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: "600",
    color: "tomato",
    paddingVertical: 4,
  },
});
