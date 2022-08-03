import { createNavigationContainerRef } from '@react-navigation/native';

/**
 * Custom nav navigator for the app.
 * Helps us navigate in components which are not part of the main navigator.
 */

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
