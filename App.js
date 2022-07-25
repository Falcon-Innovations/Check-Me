import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ScreenNavigator from "./src/navigation/ScreenNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <ScreenNavigator />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
