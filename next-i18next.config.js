const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
  defaultNs: "shared",
  fallbackLng: { default: ["en", "ar"] },
  localePath: path.resolve("./public/locales"),
};
