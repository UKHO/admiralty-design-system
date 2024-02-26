import { newSpecPage } from '@stencil/core/testing';
import { ColourBlockComponent } from './colour-block';

describe('admiralty-colour-block', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ColourBlockComponent],
      html: '<admiralty-colour-block></admiralty-colour-block>',
    });
    expect(root).toEqualHtml(`
      <admiralty-colour-block>
        <div class="admiralty-blue colourBlock">
          <h2></h2>
          <div class="content white-text"></div>
        </div>
      </admiralty-colour-block>
    `);
  });

  it('should emit colourBlockLinkClicked event when emitColourBlockLinkClicked() is called', () => {
    const colourBlockComponent = new ColourBlockComponent();

    const colourBlockLinkClickedEmitSpy = jest.spyOn(colourBlockComponent.colourBlockLinkClicked, 'emit');

    expect(colourBlockLinkClickedEmitSpy).toHaveBeenCalledTimes(0);

    colourBlockComponent.emitColourBlockLinkClicked();

    expect(colourBlockLinkClickedEmitSpy).toHaveBeenCalledTimes(1);
  });

  it('should call emitColourBlockLinkClicked() when handleClickAction() is called', () => {
    const colourBlockComponent = new ColourBlockComponent();

    const colourBlockLinkClickedEmitSpy = jest.spyOn(colourBlockComponent.colourBlockLinkClicked, 'emit');

    expect(colourBlockLinkClickedEmitSpy).toHaveBeenCalledTimes(0);

    colourBlockComponent.handleClickAction();

    expect(colourBlockLinkClickedEmitSpy).toHaveBeenCalledTimes(1);
  });
});
