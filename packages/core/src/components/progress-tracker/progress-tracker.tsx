import { Component, h, Prop, Event, EventEmitter, State, Host, Element } from '@stencil/core';

export type StepStatus = 'complete' | 'current' | 'upcoming' | 'error';

export interface StepNavigationDetail {
  stepId: string;
  stepIndex: number;
}

@Component({
  tag: 'admiralty-progress-tracker',
  styleUrl: 'progress-tracker.scss',
  scoped: true,
})
export class ProgressTrackerComponent {
  @Element() el!: HTMLElement;

  /**
   * Whether navigation to previous steps is allowed
   */
  @Prop() allowBackNavigation = true;

  /**
   * Whether navigation to future steps is allowed. Set to false by default to prevent users from skipping ahead in a process.
   */
  @Prop() allowForwardNavigation = false;

  /**
   * Emitted when user clicks on a step
   */
  @Event() stepClicked: EventEmitter<StepNavigationDetail>;

  @State() focusedStepIndex: number | null = 0;
  @State() currentSteps: Array<{
    id: string;
    title: string;
    status: StepStatus;
    summary?: string;
    bulletSummaries?: string[];
  }> = [];

  @State() liveMessage = '';

  private observer?: MutationObserver;
  private previousCurrentStepId: string | null = null;
  private lastActiveStepIndex: number | null = null;
  private hasInitialised = false;

  componentWillLoad() {
    this.updateStepsFromChildren();
  }

  componentDidLoad() {
    // Update steps after children have hydrated
    this.updateStepsFromChildren();

    // Initialize focusedStepIndex to the first clickable step
    this.initializeFocusedStep();

    // Set up a mutation observer to watch for child changes (only in browser environment)
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => {
        this.updateStepsFromChildren();
        // Re-initialize focus if the first clickable step changed
        if (this.focusedStepIndex === null || !this.isStepClickable(this.focusedStepIndex)) {
          this.initializeFocusedStep();
        }
      });

      this.observer.observe(this.el, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['step-id', 'step-title', 'status', 'summary'],
      });
    }
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initializeFocusedStep() {
    // Find the first clickable step
    const steps = this.getSteps();
    for (let i = 0; i < steps.length; i++) {
      if (this.isStepClickable(i)) {
        this.focusedStepIndex = i;
        return;
      }
    }
    // If no clickable step exists, focus the first step
    this.focusedStepIndex = steps.length > 0 ? 0 : null;
  }

  private updateStepsFromChildren() {
    // Query for child step components
    const stepElements = Array.from(this.el.querySelectorAll('admiralty-progress-tracker-step')) as HTMLElement[];

    this.currentSteps = stepElements.map((stepEl: any) => {
      // Get bullet summaries from slotted content
      const bulletSummaries: string[] = [];
      const bulletList = stepEl.querySelector('[slot="bullet-summaries"]');
      if (bulletList) {
        const items = bulletList.querySelectorAll('li');
        items.forEach((item: any) => {
          if (item.textContent) {
            bulletSummaries.push(item.textContent.trim());
          }
        });
      }

      return {
        id: stepEl.getAttribute('step-id') || stepEl.stepId || '',
        title: stepEl.getAttribute('step-title') || stepEl.stepTitle || '',
        status: (stepEl.getAttribute('status') || stepEl.status || 'upcoming') as StepStatus,
        summary: stepEl.getAttribute('summary') || stepEl.summary,
        bulletSummaries: bulletSummaries.length > 0 ? bulletSummaries : undefined,
      };
    });

    this.announceCurrentStepChange();
  }

  private announceCurrentStepChange() {
    const steps = this.getSteps();
    const currentIndex = steps.findIndex(step => step.status === 'current');
    const current = currentIndex === -1 ? undefined : steps[currentIndex];

    if (!this.hasInitialised) {
      this.hasInitialised = true;
      this.previousCurrentStepId = current?.id ?? null;
      return;
    }

    if (current && current.id !== this.previousCurrentStepId) {
      this.liveMessage = `Now on step ${currentIndex + 1} of ${steps.length}: ${current.title}`;
      this.previousCurrentStepId = current.id;
    }
  }

  private getSteps() {
    return this.currentSteps;
  }

  private renderCheckIcon() {
    return (
      <span class="progress-tracker-check">
        <admiralty-icon class="icon-padding" name="check"></admiralty-icon>
      </span>
    );
  }

  private renderMarker(status: StepStatus) {
    if (status === 'complete') {
      return (
        <span class="progress-tracker-marker progress-tracker-marker--complete" aria-label="Step completed">
          {this.renderCheckIcon()}
        </span>
      );
    }

    if (status === 'current') {
      return <span class="progress-tracker-marker progress-tracker-marker--current" aria-label="Current step"></span>;
    }

    if (status === 'error') {
      return <span class="progress-tracker-marker progress-tracker-marker--error" aria-label="Step has an error"></span>;
    }

    return <span class="progress-tracker-marker progress-tracker-marker--upcoming" aria-label="Upcoming step"></span>;
  }

  private getCurrentStepIndex(): number {
    const steps = this.getSteps();

    // Look for current step
    const currentIndex = steps.findIndex(step => step.status === 'current');

    // Default to 0 if no current step is marked
    return currentIndex === -1 ? 0 : currentIndex;
  }

  private isStepClickable(index: number): boolean {
    const currentIndex = this.getCurrentStepIndex();

    // Allow clicking on current step
    if (index === currentIndex) return true;

    // Allow clicking on previous steps if allowBackNavigation is true
    if (this.allowBackNavigation && index < currentIndex) return true;

    // Allow clicking on future steps if allowForwardNavigation is true
    if (this.allowForwardNavigation && index > currentIndex) return true;

    // Future steps (after current) are not clickable by default
    return false;
  }

  private handleStepClick(stepId: string, index: number) {
    if (!this.isStepClickable(index)) return;

    this.stepClicked.emit({ stepId, stepIndex: index });
  }

  private handleStepKeyDown(event: KeyboardEvent, stepId: string, index: number) {
    // Enter or Space to activate
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleStepClick(stepId, index);
    }
    // Arrow navigation
    else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      const steps = this.getSteps();
      // Find next clickable step
      for (let i = index + 1; i < steps.length; i++) {
        if (this.isStepClickable(i)) {
          this.focusedStepIndex = i;
          this.focusButton(i);
          break;
        }
      }
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      // Find previous clickable step
      for (let i = index - 1; i >= 0; i--) {
        if (this.isStepClickable(i)) {
          this.focusedStepIndex = i;
          this.focusButton(i);
          break;
        }
      }
    }
  }

  private focusButton(stepIndex: number) {
    // Find the button that corresponds to this step index via data attribute
    const button = this.el.querySelector(`button[data-step-index="${stepIndex}"]`) as HTMLButtonElement;
    if (button) {
      button.focus();
    }
  }

  componentWillRender() {
    const active = document.activeElement as HTMLElement | null;
    if (active && this.el.contains(active) && active.hasAttribute('data-step-index')) {
      const index = parseInt(active.getAttribute('data-step-index') || '', 10);
      this.lastActiveStepIndex = Number.isNaN(index) ? null : index;
    } else {
      this.lastActiveStepIndex = null;
    }
  }

  componentDidRender() {
    if (this.lastActiveStepIndex === null) return;

    const stillPresent = this.el.querySelector(`button[data-step-index="${this.lastActiveStepIndex}"]`);
    if (!stillPresent) {
      const steps = this.getSteps();
      let target: number | null = null;

      for (let i = this.lastActiveStepIndex; i < steps.length; i++) {
        if (this.isStepClickable(i)) {
          target = i;
          break;
        }
      }
      if (target === null) {
        for (let i = this.lastActiveStepIndex - 1; i >= 0; i--) {
          if (this.isStepClickable(i)) {
            target = i;
            break;
          }
        }
      }

      if (target !== null) {
        this.focusButton(target);
      }
    }

    this.lastActiveStepIndex = null;
  }

  render() {
    const steps = this.getSteps();

    return (
      <Host role="region" aria-label="Progress tracking">
        <nav class="progress-tracker" aria-label="Progress tracker - step navigation">
          <ol class="progress-tracker-list">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;
              const isClickable = this.isStepClickable(idx);
              const ariaLabel = `${idx + 1}. ${step.title}. Status: ${step.status}`;

              return (
                <li
                  key={step.id}
                  class={{
                    'progress-tracker-item': true,
                    [`progress-tracker-item--${step.status}`]: true,
                    'progress-tracker-item--last': isLast,
                    'progress-tracker-item--clickable': isClickable,
                  }}
                  role="listitem"
                  aria-current={step.status === 'current' ? 'step' : undefined}
                >
                  {/* Left marker + vertical line */}
                  <div class="progress-tracker-rail" aria-hidden="true">
                    {this.renderMarker(step.status)}
                    {!isLast && <span class="progress-tracker-line" />}
                  </div>

                  {/* Right content */}
                  <div class="progress-tracker-content">
                    {/* Clickable title only */}
                    {isClickable ? (
                      <button
                        class="progress-tracker-title"
                        data-step-index={idx}
                        onClick={() => this.handleStepClick(step.id, idx)}
                        onKeyDown={e => this.handleStepKeyDown(e, step.id, idx)}
                        tabindex={0}
                        aria-label={ariaLabel}
                        type="button"
                      >
                        {step.title}
                      </button>
                    ) : (
                      <div class="progress-tracker-title">{step.title}</div>
                    )}
                    {step.summary && <div class="progress-tracker-summary">{step.summary}</div>}
                    {step.bulletSummaries && step.bulletSummaries.length > 0 && (
                      <ul class="progress-tracker-bullet-summary">
                        {step.bulletSummaries.map((bullet, bulletIdx) => (
                          <li key={bulletIdx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
        <div class="progress-tracker-visually-hidden" aria-live="polite" aria-atomic="true">
          {this.liveMessage}
        </div>

        {/* Hidden slot for child step components */}
        <div style={{ display: 'none' }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
