import { Component, Prop, h } from '@stencil/core';
import { faCheck, faCircleInfo, faExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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

  getIconNameForType(): IconDefinition {
    switch (this.type) {
      case 'info':
        return faCircleInfo;
      case 'warning':
        return faTriangleExclamation;
      case 'success':
        return faCheck;
      case 'error':
        return faExclamation;
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
          <admiralty-icon class="dialogue-title-icon" icon-name={this.getIconNameForType().iconName}></admiralty-icon>
          <h2>{this.heading}</h2>
        </div>
        <slot></slot>
      </section>
    );
  }
}
