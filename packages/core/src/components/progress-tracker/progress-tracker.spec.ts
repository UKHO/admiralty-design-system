import { newSpecPage } from '@stencil/core/testing';
import { ProgressTrackerComponent } from './progress-tracker';
import { ProgressTrackerStepComponent } from '../progress-tracker-step/progress-tracker-step';

describe('admiralty-progress-tracker', () => {
  it('renders step titles and status markers correctly', async () => {
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

    await page.waitForChanges();

    const titles = page.root.querySelectorAll('.progress-tracker-title');
    expect(titles.length).toBe(3);
    expect(titles[0].textContent).toBe('Step 1');
    expect(titles[1].textContent).toBe('Step 2');
    expect(titles[2].textContent).toBe('Step 3');

    const items = page.root.querySelectorAll('.progress-tracker-item');
    expect(items[0].classList.contains('progress-tracker-item--complete')).toBe(true);
    expect(items[1].classList.contains('progress-tracker-item--current')).toBe(true);
    expect(items[2].classList.contains('progress-tracker-item--upcoming')).toBe(true);

    const completeMarker = page.root.querySelector('.progress-tracker-marker--complete');
    expect(completeMarker).toBeTruthy();
    expect(completeMarker.querySelector('admiralty-icon')).toBeTruthy();
  });

  it('renders error message when status is error', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker>
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="error" error-message="Error occurred"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    await page.waitForChanges();

    const errorMessage = page.root.querySelector('.progress-tracker-error');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toBe('Error occurred');
    expect(errorMessage.getAttribute('role')).toBe('alert');
  });

  it('renders bullet summaries from slotted content', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker>
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="current">
            <ul slot="bullet-summaries">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    await page.waitForChanges();

    const bulletList = page.root.querySelector('.progress-tracker-bullet-summary');
    expect(bulletList).toBeTruthy();
    const items = bulletList.querySelectorAll('li');
    expect(items.length).toBe(3);
    expect(items[0].textContent).toBe('Item 1');
    expect(items[1].textContent).toBe('Item 2');
    expect(items[2].textContent).toBe('Item 3');
  });

  it('makes previous and current steps clickable when allowBackNavigation is true', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker allow-back-navigation="true">
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="current"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step3" step-title="Step 3" status="upcoming"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    await page.waitForChanges();

    const buttons = page.root.querySelectorAll('.progress-tracker-button');
    expect(buttons.length).toBe(2); // step1 and step2 should be clickable

    const items = page.root.querySelectorAll('.progress-tracker-item');
    expect(items[0].classList.contains('progress-tracker-item--clickable')).toBe(true);
    expect(items[1].classList.contains('progress-tracker-item--clickable')).toBe(true);
    expect(items[2].classList.contains('progress-tracker-item--clickable')).toBe(false);
  });

  it('makes future steps non-clickable when allowBackNavigation is false', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker allow-back-navigation="false">
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="complete"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="current"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    await page.waitForChanges();

    const buttons = page.root.querySelectorAll('.progress-tracker-button');
    expect(buttons.length).toBe(1); // only current step should be clickable

    const items = page.root.querySelectorAll('.progress-tracker-item');
    expect(items[0].classList.contains('progress-tracker-item--clickable')).toBe(false);
    expect(items[1].classList.contains('progress-tracker-item--clickable')).toBe(true);
  });

  it('does not make future steps clickable', async () => {
    const page = await newSpecPage({
      components: [ProgressTrackerComponent, ProgressTrackerStepComponent],
      html: `
        <admiralty-progress-tracker>
          <admiralty-progress-tracker-step step-id="step1" step-title="Step 1" status="current"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step2" step-title="Step 2" status="upcoming"></admiralty-progress-tracker-step>
          <admiralty-progress-tracker-step step-id="step3" step-title="Step 3" status="upcoming"></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
      `,
    });

    await page.waitForChanges();

    const buttons = page.root.querySelectorAll('.progress-tracker-button');
    expect(buttons.length).toBe(1); // only current step should be clickable

    const items = page.root.querySelectorAll('.progress-tracker-item');
    expect(items[0].classList.contains('progress-tracker-item--clickable')).toBe(true);
    expect(items[1].classList.contains('progress-tracker-item--clickable')).toBe(false);
    expect(items[2].classList.contains('progress-tracker-item--clickable')).toBe(false);
  });

  it('sets tabindex=0 on first clickable step and -1 on others', async () => {
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

    const buttons = page.root.querySelectorAll('.progress-tracker-button');
    expect(buttons[0].getAttribute('tabindex')).toBe('0');
    expect(buttons[1].getAttribute('tabindex')).toBe('-1');
  });

  it('emits stepClicked event with correct detail when step is clicked', async () => {
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

    const stepClickedSpy = jest.fn();
    page.root.addEventListener('stepClicked', stepClickedSpy);

    const button = page.root.querySelector('.progress-tracker-button') as HTMLButtonElement;
    button.click();

    await page.waitForChanges();

    expect(stepClickedSpy).toHaveBeenCalled();
    expect(stepClickedSpy.mock.calls[0][0].detail).toEqual({
      stepId: 'step1',
      stepIndex: 0,
    });
  });
});
