module.exports = async ({ config }) => {
  // Enable source addon
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            trailingComma: 'all',
            singleQuote: true,
            htmlWhitespaceSensitivity: 'ignore',
            printWidth: 120,
          },
        },
      },
    ],
    enforce: 'pre',
  });

  return config;
};
