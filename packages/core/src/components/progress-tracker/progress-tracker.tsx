import { Component, h, Prop, Event, EventEmitter, State, Host } from '@stencil/core';

export type StepStatus = 'complete' | 'current' | 'upcoming' | 'error';

export interface ProgressStep {
  id: string;
  title: string;
  status: StepStatus;
  summary?: string;
  /**
   * Bullet summaries shown under the step title
   */
  bulletSummaries?: string[];
  errorMessage?: string;
  isValid?: boolean;
}

export interface StepNavigationDetail {
  stepId: string;
  stepIndex: number;
}

export interface StepValidationDetail {
  stepId: string;
  stepIndex: number;
  isValid: boolean;
}

@Component({
  tag: 'admiralty-progress-tracker',
  styleUrl: 'progress-tracker.scss',
  scoped: true,
})
export class ProgressTrackerComponent {
  /**
   * Array of steps to display in the progress tracker
   */
  @Prop() steps: ProgressStep[] = [];

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

  private renderCheckIcon() {
    return (
      <svg class="progress-tracker__check" width="14" height="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d="M7.6 13.4 4.5 10.3a1 1 0 0 1 1.4-1.4l1.7 1.7 6-6a1 1 0 1 1 1.4 1.4l-6.7 6.7a1 1 0 0 1-1.4 0Z" fill="currentColor" />
      </svg>
    );
  }

  private renderMarker(status: StepStatus, stepNumber: number) {
    if (status === 'complete') {
      return (
        <span class="progress-tracker__marker progress-tracker__marker--complete" aria-label="Step completed">
          {this.renderCheckIcon()}
        </span>
      );
    }

    if (status === 'error') {
      return (
        <span class="progress-tracker__marker progress-tracker__marker--error" aria-label="Step has errors">
          <span class="progress-tracker__marker-number">{stepNumber}</span>
        </span>
      );
    }

    if (status === 'current') {
      return (
        <span class="progress-tracker__marker progress-tracker__marker--current" aria-label="Current step">
          {/* <span class="progress-tracker__marker-number">{stepNumber}</span> */}
        </span>
      );
    }

    return (
      <span class="progress-tracker__marker progress-tracker__marker--upcoming" aria-label="Upcoming step">
        {/* <span class="progress-tracker__marker-number">{stepNumber}</span> */}
      </span>
    );
  }

  private getCurrentStepIndex(): number {
    return this.steps.findIndex(step => step.status === 'current');
  }

  private isStepClickable(index: number): boolean {
    if (!this.allowBackNavigation) return false;
    const currentIndex = this.getCurrentStepIndex();
    return index < currentIndex || this.steps[index].status === 'current';
  }

  private async handleStepClick(stepId: string, index: number) {
    if (!this.isStepClickable(index)) return;

    // If validation is required and we're navigating forward
    const currentIndex = this.getCurrentStepIndex();
    if (this.validateBeforeNavigation && index > currentIndex) {
      const currentStep = this.steps[currentIndex];
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
      const nextStep = this.steps[index + 1];
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
    return (
      <Host role="region" aria-label="Progress tracking">
        <nav class="progress-tracker" aria-label="Progress tracker - step navigation">
          <ol class="progress-tracker__list">
            {this.steps.map((step, idx) => {
              const isLast = idx === this.steps.length - 1;
              const isClickable = this.isStepClickable(idx);
              const ariaLabel = `${idx + 1}. ${step.title}. Status: ${step.status}`;

              return (
                <li
                  key={step.id}
                  class={{
                    'progress-tracker__item': true,
                    [`progress-tracker__item--${step.status}`]: true,
                    'progress-tracker__item--last': isLast,
                    'progress-tracker__item--clickable': isClickable,
                  }}
                  role="listitem"
                  aria-current={step.status === 'current' ? 'step' : undefined}
                >
                  {/* Clickable button for completed/current steps */}
                  {isClickable ? (
                    <button
                      class="progress-tracker__button"
                      onClick={() => this.handleStepClick(step.id, idx)}
                      onKeyDown={e => this.handleStepKeyDown(e, step.id, idx)}
                      tabindex={this.focusedStepIndex === idx ? 0 : -1}
                      aria-label={ariaLabel}
                      type="button"
                    >
                      {/* Left marker + vertical line */}
                      <div class="progress-tracker__rail" aria-hidden="true">
                        {this.renderMarker(step.status, idx + 1)}
                        {!isLast && <span class="progress-tracker__line" />}
                      </div>

                      {/* Right content */}
                      <div class="progress-tracker__content">
                        <div class="progress-tracker__title">{step.title}</div>
                        {step.summary && <div class="progress-tracker__summary">{step.summary}</div>}
                        {step.bulletSummaries && step.bulletSummaries.length > 0 && (
                          <ul class="progress-tracker__bullet-summary">
                            {step.bulletSummaries.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        {step.status === 'error' && step.errorMessage && (
                          <div class="progress-tracker__error" role="alert">
                            {step.errorMessage}
                          </div>
                        )}
                      </div>
                    </button>
                  ) : (
                    <div class="progress-tracker__step-disabled" role="button" aria-disabled="true" aria-label={ariaLabel}>
                      {/* Left marker + vertical line */}
                      <div class="progress-tracker__rail" aria-hidden="true">
                        {this.renderMarker(step.status, idx + 1)}
                        {!isLast && <span class="progress-tracker__line" />}
                      </div>

                      {/* Right content */}
                      <div class="progress-tracker__content">
                        <div class="progress-tracker__title">{step.title}</div>
                        {step.summary && <div class="progress-tracker__summary">{step.summary}</div>}
                        {step.bulletSummaries && step.bulletSummaries.length > 0 && (
                          <ul class="progress-tracker__bullet-summary">
                            {step.bulletSummaries.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        {step.status === 'error' && step.errorMessage && (
                          <div class="progress-tracker__error" role="alert">
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
      </Host>
    );
  }
}
