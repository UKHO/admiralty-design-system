import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

let nextId = 0;

@Component({
  tag: 'admiralty-expansion',
  styleUrl: 'expansion.scss',
  scoped: false,
})
export class ExpansionComponent {
  /**
   * The text to display in the heading of the expansion component.
   */
  @Prop() heading: string;

  /**
   * Whether the component is expanded.
   */
  @Prop({ mutable: true, reflect: true }) expanded = false;

  /**
   * CWhether the heading should be right aligned.
   */
  @Prop() alignHeadingRight = false;

  /**
   * Whether the border on the bottom of the component should be hidden.
   */
  @Prop() hideBorder = false;

  /**
   * The event that is dispatched when the expanded status is toggled.
   */
  @Event() toggled: EventEmitter<boolean>;

  id: string = `admiralty-expansion-${++nextId}`;

  headerId: string = `${this.id}-header`;
  contentId: string = `${this.id}-content`;

  onToggle() {
    this.expanded = !this.expanded;
    this.toggled.emit(this.expanded);
  }

  getExpansionIcon(): IconDefinition {
    return this.expanded ? faChevronUp : faChevronDown;
  }

  render() {
    return (
      <section
        class={{
          expansion: true,
          expanded: this.expanded,
          bordered: !this.hideBorder,
        }}
      >
        <button id={this.headerId} type="button" aria-expanded={this.expanded} aria-controls={this.contentId} class="expansion-heading-button" onClick={this.onToggle.bind(this)}>
          <h3 class={{ 'expansion-heading-right-align': this.alignHeadingRight }}>{this.heading}</h3>
          <span class="visually-hidden">, {this.expanded ? 'Hide' : 'Show'} this section</span>
          <admiralty-icon class="expansion-heading-icon" icon-name={this.getExpansionIcon().iconName}></admiralty-icon>
        </button>
        <div class="expansion-content" id={this.contentId} aria-labelledby={this.headerId} hidden={!this.expanded}>
          <slot></slot>
        </div>
      </section>
    );
  }
}
