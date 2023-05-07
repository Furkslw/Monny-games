/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,

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
              localIdentName: "[name]__[local]__[hash:base64:5]",
            },
          },
        },
      ],
    });

    return config;
  },
};
