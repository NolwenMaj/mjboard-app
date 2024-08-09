module.exports = {
  async redirects() {
    return [
      {
        source: "/welcome",
        destination: "/sign-in",
        permanent: true,
      },
    ];
  },
};
