import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-dialogue',
  styleUrl: 'dialogue.scss',
  scoped: true,
})
export class DialogueComponent {
  /**
   * The type of dialogue box to render.
   */
  @Prop() type: 'info' | 'warning' | 'success' | 'error' = 'info';

  /**
   * The heading to display.
   */
  @Prop() heading: string;

  /**
   * The role to give the dialogue section. Set this to `alert` if the dialogue box is being used to summarise error messages.
   */
  @Prop() sectionRole: 'alert';

  getIconNameForType(): string {
    switch (this.type) {
      case 'info':
        return 'info-rounded';
      case 'warning':
        return 'warning-rounded';
      case 'success':
        return 'check-rounded';
      case 'error':
        return 'priority-high-rounded';
    }
  }

  render() {
    const sectionProps = {
      ...(this.sectionRole && { role: this.sectionRole }),
    };
    return (
      <section
        class={{
          dialogue: true,
          [this.type]: true,
        }}
        {...sectionProps}
      >
        <div class="dialogue-title">
          <admiralty-icon class="dialogue-title-icon" name={this.getIconNameForType()}></admiralty-icon>
          <h2>{this.heading}</h2>
        </div>
        <slot></slot>
      </section>
    );
  }
}
