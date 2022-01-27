/* First load the font face definitions */
import "!style-loader!css-loader!sass-loader!./fonts.scss";
/* Then load the styles so that slotted content is styled correctly */
import "!style-loader!css-loader!sass-loader!../styles/scss/core.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
