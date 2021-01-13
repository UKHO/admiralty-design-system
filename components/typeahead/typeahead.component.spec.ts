import { FormControl } from '@angular/forms';
import { createKeyboardEvent } from '@ngneat/spectator';
import { createComponentFactory, createHostFactory } from '@ngneat/spectator/jest';
import { TypeaheadComponent } from './typeahead.component';

describe('TypeaheadComponent', () => {
  const createHost = createHostFactory({ component: TypeaheadComponent, shallow: true });

  it('should create', () => {
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>');
    expect(spectator.component).toBeTruthy();
  });

  it('textChanged should call the filter function passed in and store the result', () => {
    const filterFn = jest.fn();
    const spectator = createHost('<ukho-typeahead label="test" [filterFn]="filterFn"></ukho-typeahead>', {
      hostProps: { filterFn: filterFn },
    });
    const component = spectator.component;
    component.textChanged('test');
    expect(filterFn).toHaveBeenCalledWith('test');
    expect(component.selectedItemIndex).toBe(-1);
  });

  it('keyPressed should reduce the selectedItemIndex by 1 if the key pressed was the up arrow', () => {
    const formControl = new FormControl();
    const setValueSpy = spyOn(formControl, 'setValue');
    const spectator = createHost('<ukho-typeahead label="test" [FormControl]="formControl"></ukho-typeahead>', {
      hostProps: { formControl: formControl },
    });
    const component = spectator.component;
    component.selectedItemIndex = 5;

    const event = createKeyboardEvent('keyup', 'ArrowUp');
    component.keyPressed(event);

    expect(component.selectedItemIndex).toBe(4);
    expect(setValueSpy).toHaveBeenCalled();
  });

  it('keyPressed should increase the selectedItemIndex by 1 if the key pressed was the down arrow', () => {
    const formControl = new FormControl();
    const setValueSpy = spyOn(formControl, 'setValue');
    const spectator = createHost('<ukho-typeahead label="test" [FormControl]="formControl"></ukho-typeahead>', {
      hostProps: { formControl: formControl },
    });
    const component = spectator.component;
    component.selectedItemIndex = 5;
    component.filterResult.length = 10;

    const event = createKeyboardEvent('keyup', 'ArrowDown');
    component.keyPressed(event);

    expect(component.selectedItemIndex).toBe(6);
    expect(setValueSpy).toHaveBeenCalled();
  });

  it('keyPressed should loop the selectedItemIndex when the up arrow is pressed', () => {
    const formControl = new FormControl();
    const setValueSpy = spyOn(formControl, 'setValue');
    const spectator = createHost('<ukho-typeahead label="test" [FormControl]="formControl"></ukho-typeahead>', {
      hostProps: { formControl: formControl },
    });
    const component = spectator.component;
    component.selectedItemIndex = -1;
    component.filterResult.length = 5;

    const event = createKeyboardEvent('keyup', 'ArrowUp');
    component.keyPressed(event);

    expect(component.selectedItemIndex).toBe(4);
    expect(setValueSpy).toHaveBeenCalled();
  });

  it('keyPressed should loop the selectedItemIndex when the down arrow is pressed', () => {
    const formControl = new FormControl();
    const setValueSpy = spyOn(formControl, 'setValue');
    const spectator = createHost('<ukho-typeahead label="test" [FormControl]="formControl"></ukho-typeahead>', {
      hostProps: { formControl: formControl },
    });
    const component = spectator.component;
    component.selectedItemIndex = 5;
    component.filterResult.length = 5;

    const event = createKeyboardEvent('keyup', 'ArrowDown');
    component.keyPressed(event);

    expect(component.selectedItemIndex).toBe(-1);
    expect(setValueSpy).toHaveBeenCalled();
  });

  it('keyPressed should do nothing if the Enter key is pressed', () => {
    const formControl = new FormControl();
    const setValueSpy = spyOn(formControl, 'setValue');
    const spectator = createHost('<ukho-typeahead label="test" [FormControl]="formControl"></ukho-typeahead>', {
      hostProps: { formControl: formControl },
    });
    const component = spectator.component;
    component.selectedItemIndex = 5;

    const event = createKeyboardEvent('keyup', 'Enter');
    component.keyPressed(event);

    expect(component.selectedItemIndex).toBe(5);
    expect(setValueSpy).not.toHaveBeenCalled();
  });

  it('keyPressed should call textChanged when any other key is pressed', () => {
    const formControl = new FormControl();
    const spectator = createHost('<ukho-typeahead label="test" [FormControl]="formControl"></ukho-typeahead>', {
      hostProps: { formControl: formControl },
    });
    const component = spectator.component;
    const textChangedSpy = spyOn(component, 'textChanged');

    const event = createKeyboardEvent('keyup', 'h');
    component.keyPressed(event);

    expect(textChangedSpy).toHaveBeenCalled();
  });

  it('itemSelected should update the selected item and perform the passed in action', () => {
    const formControl = new FormControl();
    const setValueSpy = spyOn(formControl, 'setValue');
    const selectionActionSpy = jest.fn();
    const spectator = createHost(
      '<ukho-typeahead label="test" [FormControl]="formControl" [selectionAction]="selectionAction"></ukho-typeahead>',
      {
        hostProps: { formControl: formControl, selectionAction: selectionActionSpy },
      },
    );
    const component = spectator.component;
    const textChangedSpy = spyOn(component, 'textChanged');

    component.itemSelected('test');

    expect(setValueSpy).toHaveBeenCalledWith('test');
    expect(textChangedSpy).toHaveBeenCalledWith('test');
    expect(selectionActionSpy).toHaveBeenCalledWith('test');
  });

  it('selectCurrentItem should call itemSelected if selectedItemIndex is great or equal to 0', () => {
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>');
    const component = spectator.component;

    component.selectedItemIndex = 5;
    component.itemSelected = jest.fn();
    component.selectCurrentItem();

    expect(component.itemSelected).toHaveBeenCalled();
  });

  it('selectCurrentItem should not call itemSelected if selectedItemIndex is less than 0', () => {
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>');
    const component = spectator.component;

    component.selectedItemIndex = -1;
    component.itemSelected = jest.fn();
    component.selectCurrentItem();

    expect(component.itemSelected).not.toHaveBeenCalled();
  });

  it('itemHovered should set the selectedItemIndex', () => {
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>');
    const component = spectator.component;
    component.selectedItemIndex = 0;

    component.itemHovered(5);

    expect(component.selectedItemIndex).toBe(5);
  });
});
