module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en", // or your default locale
        permanent: false,
      },
    ];
  },
};
