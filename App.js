import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ScreenNavigator from "./src/navigation/ScreenNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_Black: require("./assets/fonts/Lato-Black.ttf"),
    Lato_Bold: require("./assets/fonts/Lato-Bold.ttf"),
    Lato_Regular: require("./assets/fonts/Lato-Regular.ttf"),
    Lato_Light: require("./assets/fonts/Lato-Light.ttf"),
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
