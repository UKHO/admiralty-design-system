import { newSpecPage } from '@stencil/core/testing';
import { ProgressTrackerComponent } from './progress-tracker';
import { ProgressTrackerStepComponent } from '../progress-tracker-step/progress-tracker-step';

describe('admiralty-progress-tracker', () => {
  it('renders successfully', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker>
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="current"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step3" step-title="Step 3" status="upcoming"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    expect(page.root).toBeTruthy();
  });

  it('renders with allow-back-navigation attribute', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker allow-back-navigation="true">
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="current"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    await page.waitForChanges();
    expect(page.root).toBeTruthy();
  });

  it('renders with validation-before-navigation attribute', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker validate-before-navigation="true">
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    await page.waitForChanges();
    expect(page.root).toBeTruthy();
  });

  it('renders with error status', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker>
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="error" error-message="Error occurred"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    await page.waitForChanges();
    expect(page.root).toBeTruthy();
  });
});
