import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

/**
 * @slot - 'admiralty-filter-group' components can be placed inside of this element to render groups of filter controls. You can also place any elements you wish
 */
@Component({
  tag: 'admiralty-filter',
  styleUrl: 'filter.scss',
  scoped: true,
})
export class FilterComponent {
  /**
   * The title of the filter
   */
  @Prop() filterTitle = 'Filter';

  /**
   * Event that is emitted when the filters are cleared
   */
  @Event() filterCleared: EventEmitter<void>;

  /**
   * Event that is emitted when the filters are applied
   */
  @Event() filterApplied: EventEmitter<void>;

  private onFilterCleared = (ev: Event) => {
    ev.preventDefault();
    this.filterCleared.emit();
  };

  private onFilterApplied = (ev: Event) => {
    ev.preventDefault();
    this.filterApplied.emit();
  };

  render() {
    return (
      <div class="filter-container">
        <div class="filter-heading">
          <div class="filter-title">{this.filterTitle}</div>
          <div class="button-wrapper">
            <button type="reset" class="text-link" aria-label="Clear selected filters" onClick={this.onFilterCleared}>
              Clear
            </button>
          </div>
        </div>
        <div>
          <slot></slot>
        </div>
        <div>
          <admiralty-button onClick={this.onFilterApplied}>Apply filters</admiralty-button>
        </div>
      </div>
    );
  }
}
