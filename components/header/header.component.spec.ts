import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { HorizontalRuleModule } from '../horizontal-rule/horizontal-rule.module';

import { HeaderComponent } from './header.component';
import {
  authOptions,
  mockMenuItemsWithSomeSubItems,
  mockMenuItemsWithSubItems,
  mockMenuItemsWithSubItemsAndNavActive,
} from './header.stories.data';
import { HeaderItem } from './header.types';

describe('HeaderComponent', () => {
  const createHost = createHostFactory({ component: HeaderComponent, imports: [HorizontalRuleModule] });
  const mockedElementDOM = { classList: { contains: jest.fn(), remove: jest.fn(), add: jest.fn() } };
  const title = 'Design System';

  afterEach(() => {
    jest.resetAllMocks();
  });
  test('should create', () => {
    const spectator = createHost('<ukho-header></ukho-header>', {
      hostProps: { title },
    });
    expect(spectator.component).toBeTruthy();
  });

  test('should set navActive class when navActive is true', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItemsAndNavActive },
      },
    );
    expect(spectator.query('.section.navActive')).toBeDefined();

    spectator.setHostInput('menuItems', mockMenuItemsWithSubItems);
    expect(spectator.query('.section.navActive')).toBeNull();
  });

  test('should create when individual inputs are passed', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [logoImgUrl]="logoImgUrl" [logoLinkUrl]="logoLinkUrl" [logoAltText]="logoAltText"></ukho-header>',
      {
        hostProps: { title, logoImgUrl: 'blah.com', logoLinkUrl: 'blah.com', logoAltText: 'blah' },
      },
    );
    expect(spectator.component).toBeTruthy();
  });

  test('should create when only title passed', () => {
    const spectator = createHost('<ukho-header [title]="title"></ukho-header>', {
      hostProps: { title },
    });
    expect(spectator.component).toBeTruthy();
  });

  test('navigateTitleLink() should emit titleLinkNavigated with the parameter of titleLinkUrl', () => {
    const expectedTitleLinkUrl1 = 'a';
    const expectedTitleLinkUrl2 = 'b';
    const spectator = createHost('<ukho-header [title]="title" [titleLinkUrl]="titleLinkUrl"></ukho-header>', {
      hostProps: { title, titleLinkUrl: expectedTitleLinkUrl1 },
    });

    const titleLinkNavigatedSpy = jest.spyOn(spectator.component.titleLinkNavigated, 'emit');

    expect(titleLinkNavigatedSpy).not.toBeCalled();
    spectator.component.navigateTitleLink(new MouseEvent('click'));
    expect(titleLinkNavigatedSpy).toBeCalledTimes(1);
    expect(titleLinkNavigatedSpy).toBeCalledWith(expectedTitleLinkUrl1);

    titleLinkNavigatedSpy.mockClear();

    expect(titleLinkNavigatedSpy).not.toBeCalled();
    spectator.setHostInput('titleLinkUrl', expectedTitleLinkUrl2);
    spectator.component.navigateTitleLink(new MouseEvent('click'));
    expect(titleLinkNavigatedSpy).toBeCalledTimes(1);
    expect(titleLinkNavigatedSpy).toBeCalledWith(expectedTitleLinkUrl2);
  });

  test('clicking on the header title should call navigateTitleLink()', () => {
    const spectator = createHost('<ukho-header [title]="title" [titleLinkUrl]="titleLinkUrl"></ukho-header>', {
      hostProps: { title, titleLinkUrl: 'a' },
    });

    spectator.component.navigateTitleLink = jest.fn().mockImplementation((e) => e.preventDefault());

    spectator.click('.headerTitle a');

    expect(spectator.component.navigateTitleLink).toHaveBeenCalledTimes(1);
  });

  test('pressing enter on the header title with focus should call navigateTitleLink()', () => {
    const spectator = createHost('<ukho-header [title]="title" [titleLinkUrl]="titleLinkUrl"></ukho-header>', {
      hostProps: { title, titleLinkUrl: 'a' },
    });

    spectator.component.navigateTitleLink = jest.fn();

    spectator.focus('.headerTitle a');

    spectator.dispatchKeyboardEvent('.headerTitle a', 'keydown', 'Enter');

    expect(spectator.component.navigateTitleLink).toHaveBeenCalledTimes(1);
  });

  test('should not have header link when titleLinkUrl input is not provided', () => {
    const spectator = createHost('<ukho-header [title]="title"></ukho-header>', {
      hostProps: { title },
    });

    expect(spectator.query('.headerTitle')).not.toHaveDescendant('a');
  });

  test('should create with AuthOptions passed', () => {
    const spectator = createHost('<ukho-header [title]="title" [authOptions]="authOptions"></ukho-header>', {
      hostProps: { title, authOptions },
    });
    expect(spectator.component).toBeTruthy();
  });

  test('should create with menuItems passed', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    expect(spectator.component).toBeTruthy();
  });

  test('openDropdown should add active to the class list of the active item', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    component.openDropdown(mockedElementDOM as any, 'test');

    expect(mockedElementDOM.classList.add).toBeCalledWith('active');
    expect(component.active).toBe(mockedElementDOM);
  });

  test('closeDropdown should remove active from the class list of the active item', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    component.active = mockedElementDOM as any;
    component.closeDropdown();

    expect(mockedElementDOM.classList.remove).toBeCalledWith('active');
    expect(component.active).toBeNull();
  });

  test('closeDropdown should do nothing if there is no active item', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    component.closeDropdown();

    expect(mockedElementDOM.classList.remove).not.toBeCalledWith('active');
    expect(component.active).toBeFalsy();
  });

  test('itemClickAction should call the clickAction if the item passed if clickAction is not null and there are no sub items', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    const headerItem: HeaderItem = {
      title: 'test',
      clickAction: jest.fn(),
    };

    component.itemClickAction(new MouseEvent('click'), headerItem);

    expect(headerItem.clickAction).toHaveBeenCalledTimes(1);
  });

  test('itemClickAction should not call the clickAction if the item passed if no clickAction', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    const headerItem: HeaderItem = {
      title: 'test',
    };

    component.itemClickAction(new MouseEvent('click'), headerItem);

    expect(headerItem.clickAction).toBeFalsy();
  });

  test('itemClickAction should not call the clickAction if the item passed if clickAction is not null but there are sub items', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    const headerItem: HeaderItem = {
      title: 'test',
      clickAction: jest.fn(),
      subitems: [
        {
          clickAction: jest.fn(),
          title: 'test',
        },
      ],
    };

    component.itemClickAction(new MouseEvent('click'), headerItem);

    expect(headerItem.clickAction).not.toHaveBeenCalled();
  });

  test('toggleMobileMenu should flip the boolean mobileMenuOpen', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBe(true);

    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBe(false);
  });

  test('clicking on an item should call itemClickAction', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSomeSubItems },
      },
    );
    const component = spectator.component;
    component.itemClickAction = jest.fn().mockImplementation((e) => e.preventDefault());
    const items = spectator.queryAll('.section > a');

    spectator.click(items[0]);

    expect(component.itemClickAction).toHaveBeenCalledTimes(1);
  });

  test('hovering over an item should call openDropdown where there is subitems', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.openDropdown = jest.fn();
    const items = spectator.queryAll('.section');

    spectator.dispatchMouseEvent(items[0], 'mouseenter');

    expect(component.openDropdown).toHaveBeenCalledTimes(1);
  });

  test('un hovering over an item should call closeDropdown where there is subitems', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.closeDropdown = jest.fn();
    const items = spectator.queryAll('.section');

    spectator.dispatchMouseEvent(items[0], 'mouseleave');

    expect(component.closeDropdown).toHaveBeenCalledTimes(1);
  });

  test('clicking on a subitem should call clickAction on the sub item', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.menuItems[0].subitems[0].clickAction = jest.fn();
    const items = spectator.queryAll('.section');
    const subitems = spectator.queryAll('.sectionDropdownItem');

    spectator.dispatchMouseEvent(items[0], 'mouseenter');
    spectator.click(subitems[0]);

    expect(component.menuItems[0].subitems[0].clickAction).toHaveBeenCalledTimes(1);
  });

  test('sign in button shows when isSignedIn returns false', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.authOptions.isSignedIn = () => false;
    spectator.detectChanges();
    const signInButton = spectator.query('#signInButton');
    expect(signInButton).toBeTruthy();
  });

  test('clicking sign in button calls signInHandler', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.authOptions.isSignedIn = () => false;
    component.authOptions.signInHandler = jest.fn();
    spectator.detectChanges();
    const signInButton = spectator.query('#signInButton');
    spectator.click(signInButton);
    expect(component.authOptions.signInHandler).toHaveBeenCalledTimes(1);
  });

  test('profile section is show if isSignedIn returns true', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.authOptions.isSignedIn = () => true;
    component.authOptions.signInHandler = jest.fn();
    spectator.detectChanges();
    const signInButton = spectator.query('#signInButton');
    expect(signInButton).toBeFalsy();

    const profileButton = spectator.query('#profile');
    expect(profileButton).toBeTruthy();
  });

  test('hovering over the profile button calls openDropdown', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.authOptions.isSignedIn = () => true;
    component.openDropdown = jest.fn();
    spectator.detectChanges();

    const profileButton = spectator.query('#profile');
    spectator.dispatchMouseEvent(profileButton, 'mouseenter');

    expect(component.openDropdown).toHaveBeenCalledTimes(1);
  });

  test('un hovering over the profile button calls closeDropdown', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.authOptions.isSignedIn = () => true;
    component.openDropdown = jest.fn();
    component.closeDropdown = jest.fn();
    spectator.detectChanges();

    const profileButton = spectator.query('#profile');
    spectator.dispatchMouseEvent(profileButton, 'mouseenter');

    expect(component.openDropdown).toHaveBeenCalledTimes(1);

    spectator.dispatchMouseEvent(profileButton, 'mouseleave');

    expect(component.closeDropdown).toHaveBeenCalledTimes(1);
  });

  test('clicking accountButton calls userProfileHandler', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.authOptions.isSignedIn = () => true;
    component.authOptions.userProfileHandler = jest.fn();

    const accountButton = spectator.query('#accountButton');

    spectator.click(accountButton);

    expect(component.authOptions.userProfileHandler).toHaveBeenCalledTimes(1);
  });

  test('clicking signOutButton calls signOutHandler', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.authOptions.isSignedIn = () => true;
    component.authOptions.signOutHandler = jest.fn();

    const signOutButton = spectator.query('#signOutButton');

    spectator.click(signOutButton);

    expect(component.authOptions.signOutHandler).toHaveBeenCalledTimes(1);
  });

  test('mobileDropdown is available if mobileMenuOpen is true', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    spectator.detectChanges();
    const mobileDropdown = spectator.query('.mobileDropdown');
    expect(mobileDropdown).toBeTruthy();
  });

  test('clicking on a mobile dropdown header item should not call clickAction', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    spectator.detectChanges();

    component.menuItems[0].clickAction = jest.fn();
    const dropdownItem = spectator.query('#mobileDropdownItem0');

    spectator.click(dropdownItem);

    expect(component.menuItems[0].clickAction).not.toHaveBeenCalled();
  });

  test('clicking on a mobile dropdown subitem calls clickAction', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    spectator.detectChanges();

    component.menuItems[0].subitems[0].clickAction = jest.fn();

    const dropdownSubItem = spectator.query('#mobileDropdownItem0 + .mobileDropdownSubItem');
    spectator.click(dropdownSubItem);

    expect(component.menuItems[0].subitems[0].clickAction).toHaveBeenCalledTimes(1);
  });

  test('clicking mobile sign in button should call signInHandler', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    component.authOptions.isSignedIn = () => false;
    component.authOptions.signInHandler = jest.fn();
    spectator.detectChanges();

    const mobileSignInButton = spectator.query('#mobileSignInButton');

    spectator.click(mobileSignInButton);

    expect(component.authOptions.signInHandler).toHaveBeenCalledTimes(1);
  });

  test('mobile sign in button does not render if isSignedIn returns true', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    component.authOptions.isSignedIn = () => true;
    spectator.detectChanges();

    const mobileSignInButton = spectator.query('#mobileSignInButton');
    expect(mobileSignInButton).toBeFalsy();
  });

  test('mobile profile button renders if isSignedIn returns true', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    component.authOptions.isSignedIn = () => true;
    spectator.detectChanges();

    const mobileProfileButton = spectator.query('#mobileProfileButton');
    expect(mobileProfileButton).toBeTruthy();
  });

  test('mobile sign out button renders if isSignedIn returns true', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    component.authOptions.isSignedIn = () => true;
    spectator.detectChanges();

    const mobileSignOutButton = spectator.query('#mobileSignOutButton');
    expect(mobileSignOutButton).toBeTruthy();
  });

  test('clicking on the mobile profile button calls userProfileHandler', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    component.authOptions.isSignedIn = () => true;
    component.authOptions.userProfileHandler = jest.fn();
    spectator.detectChanges();

    const mobileProfileButton = spectator.query('#mobileProfileButton');

    spectator.click(mobileProfileButton);

    expect(component.authOptions.userProfileHandler).toHaveBeenCalledTimes(1);
  });

  test('clicking on the mobile sign out button calls signOutHandler', () => {
    const spectator = createHost(
      '<ukho-header [title]="title" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { title, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    component.authOptions.isSignedIn = () => true;
    component.authOptions.signOutHandler = jest.fn();
    spectator.detectChanges();

    const mobileSignOutButton = spectator.query('#mobileSignOutButton');

    spectator.click(mobileSignOutButton);

    expect(component.authOptions.signOutHandler).toHaveBeenCalledTimes(1);
  });
});
