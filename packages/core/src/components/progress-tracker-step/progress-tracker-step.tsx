import { Component, Prop, h, Host, Element } from '@stencil/core';

export type StepStatus = 'complete' | 'current' | 'upcoming' | 'error';

/**
 * A step component used within admiralty-progress-tracker to define individual steps in a progress flow.
 */
@Component({
  tag: 'admiralty-progress-tracker-step',
  styleUrl: 'progress-tracker-step.scss',
  scoped: true,
})
export class ProgressTrackerStepComponent {
  @Element() el!: HTMLElement;

  /**
   * Unique identifier for the step
   */
  @Prop() stepId!: string;

  /**
   * The title text displayed for the step
   */
  @Prop() stepTitle!: string;

  /**
   * The current status of the step
   */
  @Prop() status: StepStatus = 'upcoming';

  /**
   * Optional summary text displayed below the title
   */
  @Prop() summary?: string;

  /**
   * Optional error message displayed when status is 'error'
   */
  @Prop() errorMessage?: string;

  render() {
    // This component is just a data container, the parent renders it
    // We return a hidden host element that contains the slotted content
    return (
      <Host style={{ display: 'none' }}>
        <slot></slot>
      </Host>
    );
  }
}
