import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "./en.json";
import fr from "./fr.json";
const LOCALE_PERSISTENCE_KEY = "language";

const languageDetector = {
  type: "languageDetector",

  async: true,

  detect: async (language) => {
    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);

    if (!persistedLocale) {
      return language("en");
    }

    language(persistedLocale);
  },

  init: () => {},

  cacheUserLanguage: (locale) => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources: {
      en: en,
      fr: fr,
    },
  });

export default i18n;

// i18n.use(initReactI18next).init({
//   compatibilityJSON: "v3",
//   lng: "en",
//   fallbackLng: "en",
//   resources: {
//     en: en,
//     fr: fr,
//   },
//   interpolation: {
//     escapeValue: false, // react already safes from xss
//   },
// });

// export default i18n;
