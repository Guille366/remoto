/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: prod ? false : true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  },
});
