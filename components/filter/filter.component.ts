import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterGroup, FilterItem } from './filter.types';

@Component({
  selector: 'ukho-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() groups: FilterGroup[];
  @Input() heading: string = 'Filters';

  /**
   * An event that is emitted when the Apply Filters button is pressed.
   *
   * The event will contain an array of filter groups.
   */
  @Output() filtersChange = new EventEmitter<FilterGroup[]>();

  // Return a unique ID for each expansion so Angular can track changes
  trackExpansion = (index: number) => `expansion-${index}`;
  // Return a unique ID for each filter item so Angular can track changes
  trackFilterItem = (groupIndex: number, index: number) => `expansion-${groupIndex}-item-${index}`;

  onExpansionChange(filterGroup: FilterGroup) {
    this.groups = this.groups.map((group: FilterGroup) => {
      if (group.title !== filterGroup.title) {
        return group;
      }
      const { expanded, ...rest } = group;
      return { ...rest, ...(!filterGroup.expanded && { expanded: true }) };
    });
  }

  onCheckboxChange(event: Event, filterGroup: FilterGroup, filterItem: FilterItem) {
    event.stopPropagation();
    this.groups = this.groups.map((group: FilterGroup) => {
      if (group.title !== filterGroup.title) {
        return group;
      }
      const items = group.items.map((item: FilterItem) => {
        if (item.title !== filterItem.title) {
          return item;
        }
        const { selected, ...rest } = item;
        return { ...rest, ...(!filterItem.selected && { selected: true }) };
      });
      return { ...group, items };
    });
  }

  onClear(): void {
    this.groups = this.groups.map((group: FilterGroup) => {
      const items = group.items.map((item: FilterItem) => {
        const { selected, ...rest } = item;
        return rest;
      });
      return { ...group, items };
    });
  }

  onApply(): void {
    this.filtersChange.emit(this.groups);
  }
}
