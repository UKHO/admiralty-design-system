import { addDecorator, configure } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

import '!style-loader!css-loader!sass-loader!./styles.scss';

configure(require.context('../src', true, /\.stories\.[tj]s$/), module);

addDecorator(withA11y);

setCompodocJson(docJson);
