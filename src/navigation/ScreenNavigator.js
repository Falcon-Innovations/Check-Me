import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Onboard,
  Dashboard,
  Register,
  Login,
  OTPVerification,
} from '../screens';
import useGetOnboardingStatus from '../utility/checkIfFirstLaunch';
import { navigationRef } from './customNavigator';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const Navigation = ({ colorScheme }) => {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
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
    navigationRef?.navigate('Signup');
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

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
