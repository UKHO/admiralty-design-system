import { Component, Input, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';

enum Keys {
  UP_ARROW = 'ArrowUp',
  DOWN_ARROW = 'ArrowDown',
  ENTER = 'Enter',
}

@Component({
  selector: 'ukho-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent {
  filterResult: string[] = new Array<string>();
  selectedItemIndex = -1;
  isFocused = false;

  private originalSearch: string;

  /**
   * Function that will be executed to filter the results shown in the typeahead
   */
  @Input() filterFn: (filterTerm: string) => string[];
  /**
   * Model that will track the contents of the input field
   */
  @Input() FormControl: FormControl;
  /**
   * The text content of the label for the input box
   */
  @Input() label: string;
  /**
   * Optional function that will be executed when the user selects an item from the typeahead
   */
  @Input() selectionAction: (selectedItemText) => unknown = () => {};

  textChanged = (value: string): void => {
    this.originalSearch = value;
    this.filterResult = this.filterFn(value);
    this.selectedItemIndex = -1;
  };

  keyPressed = (event: KeyboardEvent): void => {
    if (event.key == Keys.UP_ARROW || event.key == Keys.DOWN_ARROW) {
      this.navigateSuggestions(event.key);
    } else if (event.key !== Keys.ENTER) {
      this.textChanged(this.FormControl.value);
    }
  };

  itemSelected = (value: string): void => {
    this.FormControl.setValue(value);
    this.textChanged(value);
    this.selectionAction(value);
  };

  private navigateSuggestions(key: Keys) {
    if (key == Keys.UP_ARROW) {
      this.selectedItemIndex--;
      if (this.selectedItemIndex == -2) {
        this.selectedItemIndex = this.filterResult.length - 1;
      }
    }
    if (key == Keys.DOWN_ARROW) {
      this.selectedItemIndex++;
      if (this.selectedItemIndex > this.filterResult.length - 1) {
        this.selectedItemIndex = -1;
      }
    }
    if (this.selectedItemIndex == -1) {
      this.FormControl.setValue(this.originalSearch);
    } else {
      this.FormControl.setValue(this.filterResult[this.selectedItemIndex]);
    }
  }

  selectCurrentItem(): void {
    if (this.selectedItemIndex >= 0) {
      const selectedItemText = this.filterResult[this.selectedItemIndex];
      this.itemSelected(selectedItemText);
    }
  }

  itemHovered(index: number): void {
    this.selectedItemIndex = index;
  }
}
