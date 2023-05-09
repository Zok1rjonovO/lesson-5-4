import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Uz from "./language/translate_uz";
import Ru from "./language/translate_ru";

const resources = {
  Uz: {
    tralation: Uz,
  },
  Ru: {
    tralation: Ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
