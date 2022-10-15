import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  Onboard,
  Dashboard,
  Register,
  Login,
  OTPVerification,
  Specialists,
  SpecialistDetails,
  ProfileOverview,
  PersonalDashboard,
  EditProfile,
  AllBlogs,
  ResetPassword,
  Settings,
  BlogDetails,
  BookMammogram,
  SelfExamination,
  MenstraulCycle,
  SetCycle,
  Notifications,
  RiskFactors,
  AllAppointments,
} from "../screens";
import useGetOnboardingStatus from "../utility/checkIfFirstLaunch";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { navigationRef } from "./customNavigator";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import ResolveAuth from "../screens/auth/ResolveAuth";
import { COLORS } from "../utility";
import BookSpecialist from "../screens/specialists/BookSpecialist";
import Hospitals from "../screens/hospitals/Hospitals";
import DetailHospital from "../screens/hospitals/DetailHospital";

const Stack = createNativeStackNavigator();

const Navigation = ({ colorScheme }) => {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      ref={navigationRef}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  const { isFirstLaunch, isLoading } = useGetOnboardingStatus();

  if (isLoading) {
    return null;
  }

  const handleOnboardingDone = () => {
    navigationRef?.navigate("Signup");
  };

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isFirstLaunch && (
          <Stack.Screen name="Onboard">
            {(props) => (
              <Onboard {...props} handleDone={handleOnboardingDone} />
            )}
          </Stack.Screen>
        )}
        <Stack.Screen name="Resolve" component={ResolveAuth} />
        <Stack.Screen name="Signup" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Specialists" component={Specialists} />
        <Stack.Screen name="SpecialistDetails" component={SpecialistDetails} />
        <Stack.Screen name="BookSpecialist" component={BookSpecialist} />
        <Stack.Screen name="Hospitals" component={Hospitals} />
        <Stack.Screen name="detailHospitals" component={DetailHospital} />
        <Stack.Screen name="ProfileOverview" component={ProfileOverview} />
        <Stack.Screen name="PersonalDashboard" component={PersonalDashboard} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Blogs" component={AllBlogs} />
        <Stack.Screen name="BlogDetails" component={BlogDetails} />
        <Stack.Screen name="BookMammogram" component={BookMammogram} />
        <Stack.Screen name="SelfExamination" component={SelfExamination} />
        <Stack.Screen name="MenstraulCycle" component={MenstraulCycle} />
        <Stack.Screen name="SetCycle" component={SetCycle} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="RiskFactors" component={RiskFactors} />
        <Stack.Screen name="AllAppointments" component={AllAppointments} />
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
    </>
  );
};

const BottomTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  const { t } = useTranslation();
  /**
   * The best approach for using a tab navigator,
   * is to nest Stack navigators for each respective tab
   * For instance a tab like "Profile"
   * We can nest everything profile like, settings,paswords and the rest
   */

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={COLORS.primary}
      barStyle={{ backgroundColor: COLORS.white }}
    >
      <Tab.Screen
        name="Feed"
        component={Dashboard}
        options={{
          tabBarLabel: t("home"),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={AllBlogs}
        options={{
          tabBarLabel: t("blog"),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Notifications}
        options={{
          tabBarLabel: t("notifications"),
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Yo"
        component={ProfileOverview}
        options={{
          tabBarLabel: t("profile"),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
