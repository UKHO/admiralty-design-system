import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'admiralty-progress-bar',
  styleUrl: 'progress-bar.scss',
  scoped: true,
})
export class ProgressBarComponent {
  private inputId = `admiralty-progress-${++progressId}`;

  /**
   * If set, adds a label above the progress bar
   */
  @Prop() label?: string;

  /**   * A value from 0 - 100 that visually represents the current progression
   */
  @Prop() progression: number = 0;

  /**
   * Set to true to indicate an error (turns the progress bar red)
   */
  @Prop() error: boolean = false;

  /**
   * Progress value, min:0, max: 100
   */

  @State() progressionValue: number = this.progression;

  /**
   * @internal
   * Watches the progression prop for changes
   * then updates the progressionValue state if the progression value is valid
   */
  @Watch('progression')
  protected progressionChanged() {
    this.updateProgression();
  }

  private updateProgression() {
    if (this.progression && this.progression >= 0 && this.progression <= 100) {
      this.progressionValue = this.progression;
    }
  }

  componentDidLoad() {
    this.updateProgression();
  }

  render() {
    const { inputId ,label, error, progressionValue } = this;

    return (
      <div class="admiralty-progress">
        {label ? <admiralty-label for={inputId}>{label} {progressionValue}</admiralty-label> : null}
        <progress id={inputId} class={{ error: error }} value={progressionValue} max="100" />
      </div>
    );
  }
}

let progressId = 0;
