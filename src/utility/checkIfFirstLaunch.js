import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useGetOnboardingStatus = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isFirstLaunchIsLoading, setIsFirstLaunchIsLoading] = useState(true);

  const checkIfFirstLaunch = async () => {
    try {
      const hasFirstLaunched = await AsyncStorage.getItem("isOnboarded");
      if (hasFirstLaunched === null) {
        await AsyncStorage.setItem("isOnboarded", JSON.stringify(true));
        setIsFirstLaunch(true);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    } finally {
      setIsFirstLaunchIsLoading(false);
    }
  };

  React.useEffect(() => {
    checkIfFirstLaunch();
    // return undefined;
  }, []);

  return {
    isFirstLaunch: isFirstLaunch,
    isLoading: isFirstLaunchIsLoading,
  };
};

export default useGetOnboardingStatus;
