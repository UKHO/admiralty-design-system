import { createComponentFactory, createHostFactory } from '@ngneat/spectator/jest';
import { TabBodyComponent } from './tab-body.component';
import { TabGroupComponent } from './tab-group.component';
import { TabHeaderComponent } from './tab-header.component';
import { TabComponent } from './tab.component';

describe('TabGroupComponent', () => {
  const createHost = createHostFactory({
    component: TabGroupComponent,
    declarations: [TabHeaderComponent, TabBodyComponent, TabComponent],
  });

  it('should create', () => {
    const spectator = createHost('<ukho-tab-group></ukho-tab-group>');
    expect(spectator.component).toBeTruthy();
  });

  it('should create with one ukho-tab', () => {
    const expectedLabel1 = 'a';
    const expectedValue1 = 'b';
    const spectator = createHost(
      '<ukho-tab-group><ukho-tab [label]="tabLabel1">{{tabValue1}}</ukho-tab></ukho-tab-group>',
      {
        hostProps: {
          tabLabel1: expectedLabel1,
          tabValue1: expectedValue1,
        },
      },
    );

    expect(spectator.component).toBeTruthy();
    expect(spectator.queryAll('ukho-tab-header')).toHaveLength(1);
    expect(spectator.queryAll('ukho-tab-body')).toHaveLength(1);
    expect(spectator.query('ukho-tab-header')).toHaveText(expectedLabel1);
    expect(spectator.query('ukho-tab-body')).toHaveText(expectedValue1);
  });

  it('should create with multiple ukho-tab', () => {
    const expectedLabel1 = 'a';
    const expectedValue1 = 'b';
    const expectedLabel2 = 'c';
    const expectedValue2 = 'd';
    const spectator = createHost(
      '<ukho-tab-group><ukho-tab [label]="tabLabel1">{{tabValue1}}</ukho-tab><ukho-tab [label]="tabLabel2">{{tabValue2}}</ukho-tab></ukho-tab-group>',
      {
        hostProps: {
          tabLabel1: expectedLabel1,
          tabValue1: expectedValue1,
          tabLabel2: expectedLabel2,
          tabValue2: expectedValue2,
        },
      },
    );

    expect(spectator.component).toBeTruthy();
    expect(spectator.queryAll('ukho-tab-header')).toHaveLength(2);
    expect(spectator.queryAll('ukho-tab-body')).toHaveLength(2);
    expect(spectator.queryAll('ukho-tab-header')[0]).toHaveText(expectedLabel1);
    expect(spectator.queryAll('ukho-tab-header')[1]).toHaveText(expectedLabel2);
    expect(spectator.queryAll('ukho-tab-body')[0]).toHaveText(expectedValue1);
    expect(spectator.queryAll('ukho-tab-body')[1]).toHaveText(expectedValue2);
  });

  it('should show/hide tabs appropriately', () => {
    const expectedLabel1 = 'a';
    const expectedValue1 = 'b';
    const expectedLabel2 = 'c';
    const expectedValue2 = 'd';
    const expectedLabel3 = 'e';
    const expectedValue3 = 'f';
    const spectator = createHost(
      '<ukho-tab-group><ukho-tab [label]="tabLabel1">{{tabValue1}}</ukho-tab><ukho-tab [label]="tabLabel2">{{tabValue2}}</ukho-tab><ukho-tab [label]="tabLabel3">{{tabValue3}}</ukho-tab></ukho-tab-group>',
      {
        hostProps: {
          tabLabel1: expectedLabel1,
          tabValue1: expectedValue1,
          tabLabel2: expectedLabel2,
          tabValue2: expectedValue2,
          tabLabel3: expectedLabel3,
          tabValue3: expectedValue3,
        },
      },
    );

    const assertActiveTab = (activeTabIndex, totalTabs) => {
      expect(spectator.queryAll('ukho-tab-header')).toHaveLength(totalTabs);
      expect(spectator.queryAll('ukho-tab-body')).toHaveLength(totalTabs);

      expect(spectator.queryAll('ukho-tab-header')[activeTabIndex]).toHaveClass('tab-active');
      expect(spectator.queryAll('ukho-tab-body')[activeTabIndex]).toHaveClass('tab-group-body-active');

      for (let i = 0; i < totalTabs - 1; i++) {
        if (i === activeTabIndex) {
          continue;
        }
        expect(spectator.queryAll('ukho-tab-header')[i]).not.toHaveClass('tab-active');
        expect(spectator.queryAll('ukho-tab-body')[i]).not.toHaveClass('tab-group-body-active');
      }
    };

    expect(spectator.component).toBeTruthy();

    assertActiveTab(0, 3);

    spectator.click(spectator.queryAll('ukho-tab-header')[2]);
    assertActiveTab(2, 3);

    spectator.click(spectator.queryAll('ukho-tab-header')[1]);
    assertActiveTab(1, 3);

    spectator.click(spectator.queryAll('ukho-tab-header')[0]);
    assertActiveTab(0, 3);
  });

  test('setTabFocus is called when keyManager detects changes', () => {
    const expectedLabel1 = 'a';
    const expectedValue1 = 'b';
    const expectedLabel2 = 'c';
    const expectedValue2 = 'd';
    const spectator = createHost(
      '<ukho-tab-group><ukho-tab [label]="tabLabel1">{{tabValue1}}</ukho-tab><ukho-tab [label]="tabLabel2">{{tabValue2}}</ukho-tab></ukho-tab-group>',
      {
        hostProps: {
          tabLabel1: expectedLabel1,
          tabValue1: expectedValue1,
          tabLabel2: expectedLabel2,
          tabValue2: expectedValue2,
        },
      },
    );

    spectator.component.ngAfterViewInit();

    spectator.component.handleClick(0);
    const setTabFocusSpy = spyOn(spectator.component, 'setTabFocus');

    const fakeKeyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', keyCode: 39, code: '39' });
    spectator.component.handleKeyDown(fakeKeyboardEvent);

    expect(setTabFocusSpy).toHaveBeenCalledWith(1);
  });

  test('setTabFocus should focus and select the tab matching the index', () => {
    const expectedLabel1 = 'a';
    const expectedValue1 = 'b';
    const expectedLabel2 = 'c';
    const expectedValue2 = 'd';
    const spectator = createHost(
      '<ukho-tab-group><ukho-tab [label]="tabLabel1">{{tabValue1}}</ukho-tab><ukho-tab [label]="tabLabel2">{{tabValue2}}</ukho-tab></ukho-tab-group>',
      {
        hostProps: {
          tabLabel1: expectedLabel1,
          tabValue1: expectedValue1,
          tabLabel2: expectedLabel2,
          tabValue2: expectedValue2,
        },
      },
    );

    const focusSpy = spyOn(spectator.component._tabHeaders.toArray()[1], 'focus');

    spectator.component.setTabFocus(1);

    expect(focusSpy).toHaveBeenCalledTimes(1);
    expect(spectator.component.selectedIndex).toBe(1);
  });

  test('handleClick changes the selectedIndex', () => {
    const spectator = createHost('<ukho-tab-group></ukho-tab-group>');
    spectator.component.handleClick(50);
    expect(spectator.component.selectedIndex).toBe(50);
  });

  test('getTabIndex returns 0 if selected index matches passed in index', () => {
    const spectator = createHost('<ukho-tab-group></ukho-tab-group>');
    spectator.component.selectedIndex = 50;
    spectator.component.getTabIndex(50);
    expect(spectator.component.getTabIndex(50)).toBe(0);
  });

  test('getTabIndex returns -1 if selected index does not match passed in index', () => {
    const spectator = createHost('<ukho-tab-group></ukho-tab-group>');
    spectator.component.selectedIndex = 10;
    spectator.component.getTabIndex(50);
    expect(spectator.component.getTabIndex(50)).toBe(-1);
  });

  test('getTabContentId returns formatted string containing passed in index', () => {
    const spectator = createHost('<ukho-tab-group></ukho-tab-group>');
    const x = spectator.component as any; // we have to be cheeky and override a private variable
    x._nextGroupId = 0;
    const result = spectator.component.getTabContentId(5);
    expect(result).toBe('tab-panel-0-5');
  });

  test('getTabLabelId returns formatted string containing passed in index', () => {
    const spectator = createHost('<ukho-tab-group></ukho-tab-group>');
    const x = spectator.component as any; // we have to be cheeky and override a private variable
    x._nextGroupId = 0;
    const result = spectator.component.getTabLabelId(5);
    expect(result).toBe('tab-label-0-5');
  });
});
