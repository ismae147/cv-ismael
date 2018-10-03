import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      MainInformation: {
        "Hi, I'm Ismael": "Hi, I'm Ismael",
        "March 18, 1997 (age <1>{{age}}</1>)":
          "March 18, 1997 (age <1>{{age}}</1>)",
        textInformation1:
          "Come and knock on my door, I will be very happy to be your partner, and do something great together."
      }
    },
    es: {
      MainInformation: {
        "Hi, I'm Ismael": "Hola, Soy Ismael",
        "March 18, 1997 (age <1>{{age}}</1>)":
          "Marzo 18, 1997 (edad <1>{{age}}</1>)",
        textInformation1:
          "Ven y llama a mi puerta, estaré muy feliz de ser tu compañero, y hagamos algo grandioso juntos."
      }
    }
  },
  fallbackLng: "es",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
