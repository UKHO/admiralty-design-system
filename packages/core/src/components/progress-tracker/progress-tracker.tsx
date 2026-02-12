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

  @State() focusedStepIndex: number | null = null;
  @State() validationErrors: Map<string, string> = new Map();
  @State() currentSteps: Array<{
    id: string;
    title: string;
    status: StepStatus;
    summary?: string;
    bulletSummaries?: string[];
    errorMessage?: string;
  }> = [];

  componentWillLoad() {
    this.updateStepsFromChildren();
  }

  componentDidLoad() {
    // Set up a mutation observer to watch for child changes
    const observer = new MutationObserver(() => {
      this.updateStepsFromChildren();
    });

    observer.observe(this.el, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['step-id', 'title', 'status', 'summary', 'error-message'],
    });
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
        id: stepEl.stepId || '',
        title: stepEl.stepTitle || '',
        status: stepEl.status || 'upcoming',
        summary: stepEl.summary,
        errorMessage: stepEl.errorMessage,
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
    return this.getSteps().findIndex(step => step.status === 'current');
  }

  private isStepClickable(index: number): boolean {
    if (!this.allowBackNavigation) return false;
    const currentIndex = this.getCurrentStepIndex();
    const steps = this.getSteps();
    return index < currentIndex || steps[index].status === 'current';
  }

  private async handleStepClick(stepId: string, index: number) {
    if (!this.isStepClickable(index)) return;

    // If validation is required and we're navigating forward
    const currentIndex = this.getCurrentStepIndex();
    const steps = this.getSteps();
    if (this.validateBeforeNavigation && index > currentIndex) {
      const currentStep = steps[currentIndex];
      if (currentStep && this.validateStep) {
        const isValid = await this.validateStep(currentStep.id, currentIndex);
        this.stepValidationRequested.emit({
          stepId: currentStep.id,
          stepIndex: currentIndex,
          isValid,
        });
        if (!isValid) return;
      }
    }

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
      const nextStep = steps[index + 1];
      if (nextStep) {
        this.focusedStepIndex = index + 1;
      }
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      if (index > 0) {
        this.focusedStepIndex = index - 1;
      }
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
                    <div class="progress-tracker-step-disabled" role="button" aria-disabled="true" aria-label={ariaLabel}>
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
