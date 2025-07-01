// next-i18next.config.js

module.exports = {
  i18n: {
    defaultLocale: "en", // Change "default" to "en" as actual default locale
    locales: ["en", "ar"], // Add only supported user-facing locales
    localeDetection: false,
    defaultNS: "common", // Default namespace for translations
  },
  react: { useSuspense: false }, // Optional: recommended for SSR
};
