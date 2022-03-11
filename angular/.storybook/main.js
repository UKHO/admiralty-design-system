module.exports = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.ts", "../styles-stories/**/*.stories.ts"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  core: {
    builder: "webpack5",
  },
};