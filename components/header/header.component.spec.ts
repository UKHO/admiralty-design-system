import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { HorizontalRuleModule } from '../horizontal-rule/horizontal-rule.module';

import { HeaderComponent } from './header.component';
import { authOptions, mockBranding, mockMenuItemsWithSubItems } from './header.stories.data';
import { HeaderItem } from './header.types';

describe('HeaderComponent', () => {
  const createHost = createHostFactory({ component: HeaderComponent, imports: [HorizontalRuleModule] });
  const mockedElementDOM = { classList: { contains: jest.fn(), remove: jest.fn(), add: jest.fn() } };

  afterEach(() => {
    jest.resetAllMocks();
  });
  test('should create', () => {
    const spectator = createHost('<ukho-header [branding]="branding"></ukho-header>', {
      hostProps: { branding: mockBranding },
    });
    expect(spectator.component).toBeTruthy();
  });

  test('should create with AuthOptions passed', () => {
    const spectator = createHost('<ukho-header [branding]="branding" [authOptions]="authOptions"></ukho-header>', {
      hostProps: { branding: mockBranding, authOptions },
    });
    expect(spectator.component).toBeTruthy();
  });

  test('should create with menuItems passed', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    expect(spectator.component).toBeTruthy();
  });

  test('openDropdown should add active to the class list of the active item', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    const mockEvent = {
      target: mockedElementDOM,
    };
    component.openDropdown(mockEvent as any);

    expect(mockedElementDOM.classList.add).toBeCalledWith('active');
    expect(component.active).toBe(mockedElementDOM);
  });

  test('closeDropdown should remove active from the class list of the active item', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    const mockEvent = {
      target: mockedElementDOM,
    };
    component.active = mockedElementDOM as any;
    component.closeDropdown(mockEvent as any);

    expect(mockedElementDOM.classList.remove).toBeCalledWith('active');
    expect(component.active).toBeNull();
  });

  test('closeDropdown should do nothing if there is no active item', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    const mockEvent = {
      target: mockedElementDOM,
    };
    component.closeDropdown(mockEvent as any);

    expect(mockedElementDOM.classList.remove).not.toBeCalledWith('active');
    expect(component.active).toBeFalsy();
  });

  test('itemClickAction should call the clickAction if the item passed if clickAction is not null and there are no sub items', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    const headerItem: HeaderItem = {
      title: 'test',
      clickAction: jest.fn(),
    };

    component.itemClickAction(headerItem);

    expect(headerItem.clickAction).toHaveBeenCalledTimes(1);
  });

  test('itemClickAction should not call the clickAction if the item passed if no clickAction', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;

    const headerItem: HeaderItem = {
      title: 'test',
    };

    component.itemClickAction(headerItem);

    expect(headerItem.clickAction).toBeFalsy();
  });

  test('itemClickAction should not call the clickAction if the item passed if clickAction is not null but there are sub items', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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

    component.itemClickAction(headerItem);

    expect(headerItem.clickAction).not.toHaveBeenCalled();
  });

  test('toggleMobileMenu should flip the boolean mobileMenuOpen', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.itemClickAction = jest.fn();
    const items = spectator.queryAll('.section');

    spectator.click(items[0]);

    expect(component.itemClickAction).toHaveBeenCalledTimes(1);
  });

  test('hovering over an item should call openDropdown where there is subitems', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    spectator.detectChanges();
    const mobileDropdown = spectator.query('.mobileDropdown');
    expect(mobileDropdown).toBeTruthy();
  });

  test('clicking on a mobile dropdown item calls clickAction', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    spectator.detectChanges();

    component.menuItems[0].clickAction = jest.fn();
    const dropdownItem = spectator.query('#mobileDropdownItem0');

    spectator.click(dropdownItem);

    expect(component.menuItems[0].clickAction).toHaveBeenCalledTimes(1);
  });

  test('clicking on a mobile dropdown subitem calls clickAction', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
      },
    );
    const component = spectator.component;
    component.mobileMenuOpen = true;
    spectator.detectChanges();

    component.menuItems[0].subitems[0].clickAction = jest.fn();

    const dropdownSubItem = spectator.query('#mobileDropdownItem0 + .sectionDropdownSubItem');
    spectator.click(dropdownSubItem);

    expect(component.menuItems[0].subitems[0].clickAction).toHaveBeenCalledTimes(1);
  });

  test('clicking mobile sign in button should call signInHandler', () => {
    const spectator = createHost(
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
      '<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>',
      {
        hostProps: { branding: mockBranding, authOptions, menuItems: mockMenuItemsWithSubItems },
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
