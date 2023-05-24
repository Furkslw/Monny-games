/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,
  env: {
    HUMOQ_API_URL: "https://apiv3.humoq.com/api/v1",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              auto: /\.module\.\w+$/i, // Bu satır CSS modülleri için eklendi
              localIdentName: "[name]__[local]__[hash:base64:5]",
            },
          },
        },
      ],
    });

    return config;
  },
};
