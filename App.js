import ErrorBoundary from 'react-native-error-boundary';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { enGB, registerTranslation } from 'react-native-paper-dates';
import './assets/i18n/i18n';
import Navigation from './src/navigation/ScreenNavigator';
import { Provider as UserProvider } from './src/contexts/userContext';
import { ErrorFallback } from './src/components/error-fallback/error-fallback';
import { NetworkGuard } from './src/components/network-guard/network-guard';

registerTranslation('en-GB', enGB);

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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <PaperProvider>
        <NetworkGuard>
          <UserProvider>
            <Navigation />
          </UserProvider>
        </NetworkGuard>
      </PaperProvider>
    </ErrorBoundary>
  );
}
