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
          <div class="content"></div>
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
          <div class="content">Test content</div>
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

  it('emits an event when the div is clicked when link is present', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link">Test</admiralty-colour-block>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('colourBlockLinkClicked', eventSpy);

    const link = page.doc.querySelector('admiralty-colour-block div');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
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

    expect(div).toHaveClass('is-interactive');
  });

  it('has interactive class when link is present', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link">Test</admiralty-colour-block>`,
    });

    const div = page.doc.querySelector('admiralty-colour-block div');

    expect(div).toHaveClass('is-interactive');
  });

  it('does not have interactive class when there is no link and card event disabled', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block heading="Test">Test</admiralty-colour-block>`,
    });

    const div = page.doc.querySelector('admiralty-colour-block div');

    expect(div).not.toHaveClass('is-interactive');
  });

  it('activates link on Enter key press on the block', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link">Test</admiralty-colour-block>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('colourBlockLinkClicked', eventSpy);

    const block = page.doc.querySelector('admiralty-colour-block div');
    block.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('sets role and tab index when block is interactive', async () => {
    const page = await newSpecPage({
      components: [ColourBlockComponent],
      html: `<admiralty-colour-block href="/test" link-text="Link">Test</admiralty-colour-block>`,
    });

    const div = page.doc.querySelector('admiralty-colour-block div');

    expect(div.getAttribute('role')).toBe('link');
    expect(div.getAttribute('tabindex')).toBe('0');
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
