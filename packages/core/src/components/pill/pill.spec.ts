import { newSpecPage } from '@stencil/core/testing';
import { PillComponent } from './pill';

describe('admiralty-pill', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill></admiralty-pill>',
    });
    expect(root).toEqualHtml(`
      <admiralty-pill>
        <span class="admiralty-blue pill">
          <span class="pill-item pill-item-text"></span>
        </span>
      </admiralty-pill>
    `);
  });

  it('renders no text when text property is undefined', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill></admiralty-pill>',
    });
    expect(root.querySelector('.pill-item-text').textContent).toBeFalsy();
  });

  it('renders text when text property is provided', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill text="texttest"></admiralty-pill>',
    });
    expect(root.querySelector('.pill-item-text').textContent).toEqual('texttest');
  });

  it('renders admiralty-blue colour when colour property is undefined', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill></admiralty-pill>',
    });
    expect(root.querySelector('.pill')).toHaveClass('admiralty-blue');
  });

  it('renders admiralty-blue colour when colour property is admiralty-blue', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill colour="admiralty-blue"></admiralty-pill>',
    });
    expect(root.querySelector('.pill')).toHaveClass('admiralty-blue');
  });

  it('renders admiralty-blue colour when colour property is invalid', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill colour="invalid"></admiralty-pill>',
    });
    expect(root.querySelector('.pill')).toHaveClass('admiralty-blue');
  });

  it('renders white colour when colour property is white', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill colour="white"></admiralty-pill>',
    });
    expect(root.querySelector('.pill')).toHaveClass('white');
  });

  it('renders bright-blue colour when colour property is bright-blue', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill colour="bright-blue"></admiralty-pill>',
    });
    expect(root.querySelector('.pill')).toHaveClass('bright-blue');
  });
});
