import { Component, EventEmitter, Prop, State, Event, h } from '@stencil/core';

let nextId = 0;

@Component({
  tag: 'admiralty-read-more',
  styleUrl: 'read-more.scss',
  scoped: true,
})
export class ReadMoreComponent {
  /**
   * The text to display in the heading of the readmore component.
   */
  @Prop() heading: string;

  @State() expanded = false;

  /**
   * The event that is dispatched when the expanded status is toggled.
   */
  @Event() admiraltyToggled: EventEmitter<boolean>;

  id: string = `admiralty-read-more-${++nextId}`;

  headerId: string = `${this.id}-header`;
  contentId: string = `${this.id}-content`;

  onToggle() {
    this.expanded = !this.expanded;
    this.admiraltyToggled.emit(this.expanded);
  }

  render() {
    return (
      <section
        class={{
          expansion: true,
          expanded: this.expanded,
        }}
      >
        <button
          id={this.headerId}
          type="button"
          aria-expanded={this.expanded}
          aria-controls={this.contentId}
          class={{ expanded: this.expanded }}
          onClick={this.onToggle.bind(this)}
        >
          <span>{this.heading}</span>
          <span class="visually-hidden">, {this.expanded ? 'Hide' : 'Show'} this section</span>
        </button>
        <div class="expansion-content" id={this.contentId} aria-labelledby={this.headerId} hidden={!this.expanded}>
          <slot></slot>
        </div>
      </section>
    );
  }
}
