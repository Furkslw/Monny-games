/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,
  env: {
    HUMOQ_API_URL: "https://apiv3.humoq.com/api/v1",
  },
};
