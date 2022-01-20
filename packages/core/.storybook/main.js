var path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  features: {
    babelModeV7: true,
  },
  framework: "@storybook/web-components",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css|\.s(c|a)ss$/,
      use: [
        {
          loader: "lit-scss-loader",
          options: {
            minify: true, // defaults to false
          },
        },
        "extract-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            // Prefer `dart-sass`
            implementation: require("sass"),
          },
        },
      ],
    });
    config.resolve.modules.push(path.resolve(__dirname));

    // Return the altered config
    return config;
  },
};
