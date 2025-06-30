// next-i18next.config.js
/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
  localePath: "./public/locales", // Ensure your translation JSONs are in public/locales/en/ and public/locales/ar/
};

module.exports = i18nConfig;
