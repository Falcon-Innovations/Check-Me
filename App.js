import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import Navigation from './src/navigation/ScreenNavigator';
import { Provider as AuthProvider } from './src/contexts/authContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_SemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_Medium: require('./assets/fonts/Poppins-Medium.ttf'),
    Poppins_Bold: require('./assets/fonts/Poppins-Bold.ttf'),
    Poppins_Regular: require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <PaperProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </PaperProvider>
    </>
  );
}
