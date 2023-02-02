import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ns1 from "../src/assets/locales/en/translation.json";
import ns2 from "../src/assets/locales/pt/translation.json";

export const defaultNS = "ns1";
export const resources = {
  en: {
    ns1,
    ns2,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["ns1", "ns2"],
  defaultNS,
  resources,
});

export default i18n;