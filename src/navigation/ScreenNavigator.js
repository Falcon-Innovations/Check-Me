import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Onboard,
  Dashboard,
  Register,
  Login,
  OTPVerification,
} from "../screens";

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboarding(false);
  };

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showOnboarding && (
          <Stack.Screen name="Onboard">
            {(props) => <Onboard {...props} handleDone={handleOnboardFinish} />}
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

export default ScreenNavigator;
