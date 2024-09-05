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

  it('renders heading and content', async () => {
    const { root } = await newSpecPage({
      components: [ColourBlockComponent],
      html: '<admiralty-colour-block heading="Test heading">Test content</admiralty-colour-block>',
    });
    expect(root).toEqualHtml(`
      <admiralty-colour-block heading="Test heading">
        <div class="admiralty-blue colourBlock">
          <h2>Test heading</h2>
          <div class="content white-text">Test content</div>
        </div>
      </admiralty-colour-block>
    `);
  });

  it('renders a different colour block', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block colour="teal"></admiralty-colour-block>`,
    });

    const div = page.doc.querySelector('admiralty-colour-block div');

    expect(div).toHaveClass('teal');
    expect(div).not.toHaveClass('light-blue');
    expect(div).not.toHaveClass('admiralty-blue');
  });

  it('renders a different colour block', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block colour="light-blue"></admiralty-colour-block>`,
    });

    const div = page.doc.querySelector('admiralty-colour-block div');

    expect(div).toHaveClass('light-blue');
    expect(div).not.toHaveClass('teal');
    expect(div).not.toHaveClass('admiralty-blue');
  });

  it('renders a link', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link">Test</admiralty-colour-block>`,
    });

    const link = page.doc.querySelector('admiralty-colour-block a');

    expect(link).not.toBeNull();
  });

  it('does not render a link when no link text is provided', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test">Test</admiralty-colour-block>`,
    });

    const link = page.doc.querySelector('admiralty-colour-block a');

    expect(link).toBeNull();
  });

  it('does not render a link when no link is provided', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block link-text="Link">Test</admiralty-colour-block>`,
    });

    const link = page.doc.querySelector('admiralty-colour-block a');

    expect(link).toBeNull();
  });

  it('emits an event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link">Test</admiralty-colour-block>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('colourBlockLinkClicked', eventSpy);

    const link = page.doc.querySelector('admiralty-colour-block a');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('does not emit an event when the div is clicked', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link">Test</admiralty-colour-block>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('colourBlockLinkClicked', eventSpy);

    const link = page.doc.querySelector('admiralty-colour-block div');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('emits an event when the div is clicked', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link" enable-card-event="true">Test</admiralty-colour-block>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('colourBlockLinkClicked', eventSpy);

    const link = page.doc.querySelector('admiralty-colour-block div');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('has cursor style pointer when the div can be clicked', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link" enable-card-event="true">Test</admiralty-colour-block>`,
    });

    const div = page.doc.querySelector('admiralty-colour-block div');

    // const styles = getComputedStyle(div);

    console.log(div.outerHTML);

    expect(div.outerHTML).toContain('pointer');
  });

  it('does not have cursor style pointer when the div can not be clicked', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link" enable-card-event="false">Test</admiralty-colour-block>`,
    });

    const div = page.doc.querySelector('admiralty-colour-block div');

    // const styles = getComputedStyle(div);

    console.log(div.outerHTML);

    expect(div.outerHTML).not.toContain('pointer');
  });

  it('prevents default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link" suppress-redirect="true">Test</admiralty-colour-block>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('colourBlockLinkClicked', eventSpy);

    const link = page.doc.querySelector('admiralty-colour-block a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('does not emit the default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link" suppress-redirect="false">Test</admiralty-colour-block>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('colourBlockLinkClicked', eventSpy);

    const link = page.doc.querySelector('admiralty-colour-block a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
