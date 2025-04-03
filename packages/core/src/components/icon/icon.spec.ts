import { newSpecPage } from '@stencil/core/testing';
import { IconComponent } from './icon';

describe('icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconComponent],
      html: `<admiralty-icon name="user" icon-prefix="fas"></admiralty-icon>`,
    });
    expect(page.root).toEqualLightHtml(`
      <admiralty-icon name="user" icon-prefix="fas">
      </admiralty-icon>
    `);
  });
});
