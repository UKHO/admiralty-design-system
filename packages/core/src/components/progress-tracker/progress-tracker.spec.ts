import { newSpecPage } from '@stencil/core/testing';
import { ProgressTrackerComponent } from './progress-tracker';

describe('admiralty-progress-tracker', () => {
  it('renders with child step components', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `
        <admiralty-progress-tracker>
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="current"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step3" step-title="Step 3" status="upcoming"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    const items = page.root?.shadowRoot?.querySelectorAll('li.progress-tracker-item');
    expect(items?.length).toBe(3);
  });

  it('renders summary information from child components', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `
        <admiralty-progress-tracker>
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete" summary="Test summary"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    const summary = page.root?.shadowRoot?.querySelector('.progress-tracker-summary');
    expect(summary?.textContent).toContain('Test summary');
  });

  it('shows clickable buttons for completed steps', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `
        <admiralty-progress-tracker allow-back-navigation="true">
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="current"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    const buttons = page.root?.shadowRoot?.querySelectorAll('button.progress-tracker-button');
    expect(buttons?.length).toBeGreaterThan(0);
  });

  it('disables future steps when allowBackNavigation is false', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `
        <admiralty-progress-tracker allow-back-navigation="false">
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="current"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step3" step-title="Step 3" status="upcoming"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    const buttons = page.root?.shadowRoot?.querySelectorAll('button.progress-tracker-button');
    expect(buttons?.length).toBe(0);
  });

  it('supports keyboard navigation', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `
        <admiralty-progress-tracker allow-back-navigation="true">
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="current"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step3" step-title="Step 3" status="upcoming"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    const button = page.root?.shadowRoot?.querySelector('button.progress-tracker-button') as HTMLButtonElement;
    const enterKeyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    button?.dispatchEvent(enterKeyEvent);

    expect(enterKeyEvent.defaultPrevented).toBe(true);
  });

  it('renders check icon for completed steps', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent],
      html: `
        <admiralty-progress-tracker>
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    const checkIcon = page.root?.shadowRoot?.querySelector('admiralty-icon.progress-tracker-check');
    expect(checkIcon).toBeTruthy();
  });
});
