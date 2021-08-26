import { createHostFactory } from '@ngneat/spectator/jest';

import { SideNavComponent } from './side-nav.component';
import { mockMenuItemsWithNoSubItems, mockMenuItemsWithNoSubItemsAndNavActive } from './side-nav.stories.data';

describe('SideNavComponent', () => {
  const createHost = createHostFactory({ component: SideNavComponent });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should create', () => {
    const spectator = createHost('<ukho-side-nav></ukho-side-nav>');
    expect(spectator.component).toBeTruthy();
  });

  test('should create with menuItems passed', () => {
    const spectator = createHost('<ukho-side-nav [menuItems]="menuItems"></ukho-side-nav>', {
      hostProps: { menuItems: mockMenuItemsWithNoSubItems },
    });
    expect(spectator.component).toBeTruthy();
  });

  test('should display a elements with menuItems passed', () => {
    const spectator = createHost('<ukho-side-nav [menuItems]="menuItems"></ukho-side-nav>', {
      hostProps: { menuItems: mockMenuItemsWithNoSubItems },
    });

    const allAElements = spectator.queryAll('nav.side-nav a.section');
    expect(allAElements).toHaveLength(mockMenuItemsWithNoSubItems.length);
    expect(
      allAElements.map((value) => {
        return value.textContent.trim();
      }),
    ).toEqual(
      mockMenuItemsWithNoSubItems.map((value) => {
        return value.title;
      }),
    );
  });

  test('should display a element with navActive class when menuItems passed includes navActive', () => {
    const spectator = createHost('<ukho-side-nav [menuItems]="menuItems"></ukho-side-nav>', {
      hostProps: { menuItems: mockMenuItemsWithNoSubItemsAndNavActive },
    });

    const allAElements = spectator.queryAll('nav.side-nav a.section.navActive');
    expect(allAElements).toHaveLength(1);
  });

  test('clicking on an item should call itemClickAction()', () => {
    const spectator = createHost('<ukho-side-nav [menuItems]="menuItems"></ukho-side-nav>', {
      hostProps: { menuItems: mockMenuItemsWithNoSubItems },
    });
    const component = spectator.component;
    component.itemClickAction = jest.fn();
    const items = spectator.queryAll('.section');

    spectator.click(items[0]);

    expect(component.itemClickAction).toHaveBeenCalledTimes(1);
  });

  test('pressing enter on an item with focus should call itemClickAction()', () => {
    const spectator = createHost('<ukho-side-nav [menuItems]="menuItems"></ukho-side-nav>', {
      hostProps: { menuItems: mockMenuItemsWithNoSubItems },
    });
    const component = spectator.component;
    component.itemClickAction = jest.fn();
    const items = spectator.queryAll('.section');

    spectator.focus(items[0]);
    spectator.keyboard.pressEnter(items[0]);

    expect(component.itemClickAction).toHaveBeenCalledTimes(1);
  });

  test('itemClickAction() should emit itemSelected with the parameter of item', () => {
    const spectator = createHost('<ukho-side-nav [menuItems]="menuItems"></ukho-side-nav>', {
      hostProps: { menuItems: mockMenuItemsWithNoSubItems },
    });

    const emitSpy = jest.spyOn(spectator.component.itemSelected, 'emit');

    expect(emitSpy).not.toBeCalled();
    spectator.component.itemClickAction(mockMenuItemsWithNoSubItems[0]);
    expect(emitSpy).toBeCalledTimes(1);
    expect(emitSpy).toBeCalledWith(mockMenuItemsWithNoSubItems[0]);
  });
});
