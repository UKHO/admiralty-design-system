import { newSpecPage } from '@stencil/core/testing';
import { ProgressTrackerComponent } from './progress-tracker';

describe('admiralty-progress-tracker', () => {
  it('renders with steps', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `<admiralty-progress-tracker></admiralty-progress-tracker>`,
    });

    const element = page.rootInstance as ProgressTrackerComponent;
    element.steps = [
      { id: 'step1', title: 'Step 1', status: 'complete' },
      { id: 'step2', title: 'Step 2', status: 'current' },
      { id: 'step3', title: 'Step 3', status: 'upcoming' },
    ];

    await page.waitForChanges();

    const items = page.root?.shadowRoot?.querySelectorAll('li.progress-tracker__item');
    expect(items?.length).toBe(3);
  });

  it('renders summary information', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `<admiralty-progress-tracker></admiralty-progress-tracker>`,
    });

    const element = page.rootInstance as ProgressTrackerComponent;
    element.steps = [{ id: 'step1', title: 'Step 1', status: 'complete', summary: 'Test summary' }];

    await page.waitForChanges();

    const summary = page.root?.shadowRoot?.querySelector('.progress-tracker__summary');
    expect(summary?.textContent).toContain('Test summary');
  });

  it('shows clickable buttons for completed steps', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `<admiralty-progress-tracker></admiralty-progress-tracker>`,
    });

    const element = page.rootInstance as ProgressTrackerComponent;
    element.steps = [
      { id: 'step1', title: 'Step 1', status: 'complete' },
      { id: 'step2', title: 'Step 2', status: 'current' },
    ];
    element.allowBackNavigation = true;

    await page.waitForChanges();

    const buttons = page.root?.shadowRoot?.querySelectorAll('button.progress-tracker__button');
    expect(buttons?.length).toBeGreaterThan(0);
  });

  it('disables future steps when allowBackNavigation is false', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `<admiralty-progress-tracker></admiralty-progress-tracker>`,
    });

    const element = page.rootInstance as ProgressTrackerComponent;
    element.steps = [
      { id: 'step1', title: 'Step 1', status: 'complete' },
      { id: 'step2', title: 'Step 2', status: 'current' },
      { id: 'step3', title: 'Step 3', status: 'upcoming' },
    ];
    element.allowBackNavigation = false;

    await page.waitForChanges();

    const buttons = page.root?.shadowRoot?.querySelectorAll('button.progress-tracker__button');
    expect(buttons?.length).toBe(0);
  });

  it('supports keyboard navigation', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `<admiralty-progress-tracker></admiralty-progress-tracker>`,
    });

    const element = page.rootInstance as ProgressTrackerComponent;
    element.steps = [
      { id: 'step1', title: 'Step 1', status: 'complete' },
      { id: 'step2', title: 'Step 2', status: 'current' },
      { id: 'step3', title: 'Step 3', status: 'upcoming' },
    ];

    await page.waitForChanges();

    const button = page.root?.shadowRoot?.querySelector('button.progress-tracker__button') as HTMLButtonElement;
    const enterKeyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    button?.dispatchEvent(enterKeyEvent);

    expect(enterKeyEvent.defaultPrevented).toBe(true);
  });

  it('renders check icon for completed steps', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `<admiralty-progress-tracker></admiralty-progress-tracker>`,
    });

    const element = page.rootInstance as ProgressTrackerComponent;
    element.steps = [{ id: 'step1', title: 'Step 1', status: 'complete' }];

    await page.waitForChanges();

    const checkIcon = page.root?.shadowRoot?.querySelector('svg.progress-tracker__check');
    expect(checkIcon).toBeTruthy();
  });
});
