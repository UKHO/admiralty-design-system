import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import "!style-loader!css-loader!sass-loader!./scss-loader.scss";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

setCompodocJson(docJson);

const customViewports = {
  minDesktop: {
    name: "Min Desktop",
    styles: {
      width: "1024px",
      height: "1000px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  chromatic: { diffThreshold: 0.75 },
  options: {
    storySort: {
      order: [
        "Card",
        "Dialogue",
        "Expansion",
        "Footer",
        "Header",
        "Horizontal Rule",
        "Paginator",
        "Phase Banner",
        "Progress Bar",
        "Table",
        "Typeahead",
      ],
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
