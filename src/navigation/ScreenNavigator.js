import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboard, Dashboard } from "../screens";

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
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};

export default ScreenNavigator;
