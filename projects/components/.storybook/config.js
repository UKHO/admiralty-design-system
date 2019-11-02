import { addDecorator, configure } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

import '!style-loader!css-loader!sass-loader!./styles.scss';

configure(require.context('../src', true, /\.stories\.[tj]s$/), module);

addDecorator(withA11y);
