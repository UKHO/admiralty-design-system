import { Component, h, Prop, Event, EventEmitter, State, Host, Element } from '@stencil/core';

export type StepStatus = 'complete' | 'current' | 'upcoming' | 'error';

export interface StepNavigationDetail {
  stepId: string;
  stepIndex: number;
}

export interface StepValidationDetail {
  stepId: string;
  stepIndex: number;
  isValid: boolean;
}

/**
 * @slot - Place admiralty-progress-tracker-step components here
 */
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
   * Whether to validate the current step before allowing navigation
   */
  @Prop() validateBeforeNavigation = false;

  /**
   * Function to validate a step (returns true if valid)
   */
  @Prop() validateStep?: (stepId: string, stepIndex: number) => boolean | Promise<boolean>;

  /**
   * Emitted when user clicks on a step
   */
  @Event() stepClicked: EventEmitter<StepNavigationDetail>;

  /**
   * Emitted when step validation is requested
   */
  @Event() stepValidationRequested: EventEmitter<StepValidationDetail>;

  @State() focusedStepIndex: number | null = 0;
  @State() currentSteps: Array<{
    id: string;
    title: string;
    status: StepStatus;
    summary?: string;
    bulletSummaries?: string[];
    errorMessage?: string;
  }> = [];

  private observer?: MutationObserver;

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
        attributeFilter: ['step-id', 'step-title', 'status', 'summary', 'error-message'],
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
        errorMessage: stepEl.getAttribute('error-message') || stepEl.errorMessage,
        bulletSummaries: bulletSummaries.length > 0 ? bulletSummaries : undefined,
      };
    });
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

    if (status === 'error') {
      return <span class="progress-tracker-marker progress-tracker-marker--error" aria-label="Step has errors"></span>;
    }

    if (status === 'current') {
      return <span class="progress-tracker-marker progress-tracker-marker--current" aria-label="Current step"></span>;
    }

    return <span class="progress-tracker-marker progress-tracker-marker--upcoming" aria-label="Upcoming step"></span>;
  }

  private getCurrentStepIndex(): number {
    const steps = this.getSteps();
    
    // Look for current step (either 'current' or 'error' status means it's the current step)
    const currentIndex = steps.findIndex(step => step.status === 'current' || step.status === 'error');
    
    // Default to 0 if no current step is marked
    return currentIndex === -1 ? 0 : currentIndex;
  }

  private isStepClickable(index: number): boolean {
    const currentIndex = this.getCurrentStepIndex();
    const currentStep = this.getSteps()[currentIndex];
    const hasValidationError = currentStep && currentStep.errorMessage;

    // Allow clicking on current step
    if (index === currentIndex) return true;

    // Allow clicking on previous steps if allowBackNavigation is true OR if there's a validation error
    if ((this.allowBackNavigation || hasValidationError) && index < currentIndex) return true;

    // Future steps (after current) are not clickable
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
                  {/* Clickable button for completed/current steps */}
                  {isClickable ? (
                    <button
                      class="progress-tracker-button"
                      data-step-index={idx}
                      onClick={() => this.handleStepClick(step.id, idx)}
                      onKeyDown={e => this.handleStepKeyDown(e, step.id, idx)}
                      tabindex={this.focusedStepIndex === idx ? 0 : -1}
                      aria-label={ariaLabel}
                      type="button"
                    >
                      {/* Left marker + vertical line */}
                      <div class="progress-tracker-rail" aria-hidden="true">
                        {this.renderMarker(step.status)}
                        {!isLast && <span class="progress-tracker-line" />}
                      </div>

                      {/* Right content */}
                      <div class="progress-tracker-content">
                        <div class="progress-tracker-title">{step.title}</div>
                        {step.summary && <div class="progress-tracker-summary">{step.summary}</div>}
                        {step.bulletSummaries && step.bulletSummaries.length > 0 && (
                          <ul class="progress-tracker-bullet-summary">
                            {step.bulletSummaries.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        {step.status === 'error' && step.errorMessage && (
                          <div class="progress-tracker-error" role="alert">
                            {step.errorMessage}
                          </div>
                        )}
                      </div>
                    </button>
                  ) : (
                    <div class="progress-tracker-step-disabled">
                      {/* Left marker + vertical line */}
                      <div class="progress-tracker-rail" aria-hidden="true">
                        {this.renderMarker(step.status)}
                        {!isLast && <span class="progress-tracker-line" />}
                      </div>

                      {/* Right content */}
                      <div class="progress-tracker-content">
                        <div class="progress-tracker-title">{step.title}</div>
                        {step.summary && <div class="progress-tracker-summary">{step.summary}</div>}
                        {step.bulletSummaries && step.bulletSummaries.length > 0 && (
                          <ul class="progress-tracker-bullet-summary">
                            {step.bulletSummaries.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        {step.status === 'error' && step.errorMessage && (
                          <div class="progress-tracker-error" role="alert">
                            {step.errorMessage}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        {/* Hidden slot for child step components */}
        <div style={{ display: 'none' }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
