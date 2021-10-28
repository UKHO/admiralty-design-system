import { FormControl } from '@angular/forms';
import { createKeyboardEvent } from '@ngneat/spectator';
import { createComponentFactory, createHostFactory } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { TypeaheadComponent } from './typeahead.component';

describe('TypeaheadComponent', () => {
  const createHost = createHostFactory({ component: TypeaheadComponent, shallow: true });

  it('should create', () => {
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>');
    expect(spectator.component).toBeTruthy();
  });

  it('keyPressed should reduce the selectedItemIndex by 1 if the key pressed was the up arrow', () => {
    const formControl = new FormControl();
    const setValueSpy = spyOn(formControl, 'setValue');
    const value = 'testvalue';
    const spectator = createHost(
      '<ukho-typeahead label="test" [FormControl]="formControl" [value]="value"></ukho-typeahead>',
      {
        hostProps: { formControl, value },
      },
    );

    expect(setValueSpy).toBeCalledTimes(1);
    expect(setValueSpy).toBeCalledWith(value);
  });

  it('performFilter() should call the filter function passed in and store the result', () => {
    const filterFn = jest.fn();
    const spectator = createHost('<ukho-typeahead label="test" [filterFn]="filterFn"></ukho-typeahead>', {
      hostProps: { filterFn },
    });
    const component = spectator.component;
    component.performFilter('test');
    expect(filterFn).toHaveBeenCalledWith('test');
    expect(component.selectedItemIndex).toBe(-1);
  });

  it('textChanged should call performFilter() with the expected string and emit event', () => {
    const performFilterFn = jest.fn();
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>', {
      props: { performFilter: performFilterFn },
    });
    const component = spectator.component;

    const valueChangedSpy = spyOn(component.valueChanged, 'emit');

    component.textChanged('test');
    expect(performFilterFn).toHaveBeenCalledWith('test');
    expect(valueChangedSpy).toHaveBeenCalledWith('test');
  });

  it('value property returns correct value', () => {
    const performFilterFn = jest.fn();
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>', {
      props: { performFilter: performFilterFn },
    });
    const component = spectator.component;

    const expectedValue = 'test';

    component.value = expectedValue;

    expect(component.value).toBe(expectedValue);
  });

  it('value property does not set invalid values', () => {
    const performFilterFn = jest.fn();
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>', {
      props: { performFilter: performFilterFn },
    });
    const component = spectator.component;

    const expectedValue = 'test';
    component.value = expectedValue;

    component.value = undefined;
    expect(component.value).toBe(expectedValue);

    component.value = null;
    expect(component.value).toBe(expectedValue);

    component.value = '';
    expect(component.value).toBe(expectedValue);
  });

  it('keyPressed should reduce the selectedItemIndex by 1 if the key pressed was the up arrow', () => {
    const formControl = new FormControl();
    const setValueSpy = spyOn(formControl, 'setValue');
    const spectator = createHost('<ukho-typeahead label="test" [FormControl]="formControl"></ukho-typeahead>', {
      hostProps: { formControl },
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
      hostProps: { formControl },
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
      hostProps: { formControl },
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
      hostProps: { formControl },
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
      hostProps: { formControl },
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
      hostProps: { formControl },
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
        hostProps: { formControl, selectionAction: selectionActionSpy },
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

  it('filterResult should be set directly when filterFn returns string[]', () => {
    const expectedArray = ['Hello', 'World'];
    const filterFn = jest.fn().mockReturnValue(expectedArray);
    const spectator = createHost('<ukho-typeahead label="test" [filterFn]="filterFn"></ukho-typeahead>', {
      hostProps: { filterFn },
    });
    const component = spectator.component;
    component.textChanged('test');
    expect(component.filterResult).toEqual(expectedArray);
    expect(component.selectedItemIndex).toBe(-1);
  });

  it('filterResult should be set to the subscribable result when filterFn returns Observable<string[]>', () => {
    const expectedArray = ['Hello', 'World'];
    const filterFn = jest.fn().mockReturnValue(of(expectedArray));
    const spectator = createHost('<ukho-typeahead label="test" [filterFn]="filterFn"></ukho-typeahead>', {
      hostProps: { filterFn },
    });
    const component = spectator.component;
    component.textChanged('test');
    expect(component.filterResult).toEqual(expectedArray);
    expect(component.selectedItemIndex).toBe(-1);
  });

  it('isFocused should be intially false', () => {
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>');
    expect(spectator.component.isFocused).toBeFalsy();
  });

  it('focusIn() sets isFocused to true', () => {
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>');
    expect(spectator.component.isFocused).toBeFalsy();

    spectator.component.focusIn();
    expect(spectator.component.isFocused).toBeTruthy();
  });

  it('focusOut() sets isFocused to false', () => {
    const spectator = createHost('<ukho-typeahead label="test"></ukho-typeahead>');
    expect(spectator.component.isFocused).toBeFalsy();

    spectator.component.focusIn();
    expect(spectator.component.isFocused).toBeTruthy();

    spectator.component.focusOut();
    expect(spectator.component.isFocused).toBeFalsy();
  });

  it('given showResultsOnInitialFocus is true then focusIn() calls performFilter() with an empty string', () => {
    const performFilterFn = jest.fn();
    const spectator = createHost(
      '<ukho-typeahead [showResultsOnInitialFocus]="showResultsOnInitialFocus"></ukho-typeahead>',
      {
        hostProps: { showResultsOnInitialFocus: true },
        props: { performFilter: performFilterFn },
      },
    );
    expect(performFilterFn).not.toBeCalled();
    spectator.component.focusIn();
    expect(performFilterFn).toBeCalledWith('');
  });

  it('given showResultsOnInitialFocus is true and input has been focused at least once then focusIn() does not call performFilter()', () => {
    const performFilterFn = jest.fn();
    const spectator = createHost(
      '<ukho-typeahead [showResultsOnInitialFocus]="showResultsOnInitialFocus"></ukho-typeahead>',
      {
        hostProps: { showResultsOnInitialFocus: true },
        props: { performFilter: performFilterFn },
      },
    );

    spectator.component.focusIn();
    expect(performFilterFn).toBeCalled();
    spectator.component.focusOut();

    performFilterFn.mockReset();

    spectator.component.focusIn();
    expect(performFilterFn).not.toBeCalled();
  });

  it('given showResultsOnInitialFocus is false then focusIn() does not call performFilter()', () => {
    const performFilterFn = jest.fn();
    const spectator = createHost(
      '<ukho-typeahead [showResultsOnInitialFocus]="showResultsOnInitialFocus"></ukho-typeahead>',
      {
        hostProps: { showResultsOnInitialFocus: false },
        props: { performFilter: performFilterFn },
      },
    );
    expect(performFilterFn).not.toBeCalled();
    spectator.component.focusIn();
    expect(performFilterFn).not.toBeCalled();
  });
});
