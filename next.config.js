/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
  env: {
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
  },
};

module.exports = nextConfig;
