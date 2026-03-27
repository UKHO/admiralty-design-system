/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@ukho/admiralty-core';


@ProxyCmp({
  inputs: ['assistiveHint', 'autoselect', 'confirmOnBlur', 'cssNamespace', 'disabled', 'displayMenu', 'filterFunction', 'hint', 'inputClasses', 'invalid', 'invalidMessage', 'label', 'menuAttributes', 'menuClasses', 'minLength', 'name', 'placeholder', 'required', 'showAllValues', 'showNoOptionsFound', 'value']
})
@Component({
  selector: 'admiralty-autocomplete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['assistiveHint', 'autoselect', 'confirmOnBlur', 'cssNamespace', 'disabled', 'displayMenu', 'filterFunction', 'hint', 'inputClasses', 'invalid', 'invalidMessage', 'label', 'menuAttributes', 'menuClasses', 'minLength', 'name', 'placeholder', 'required', 'showAllValues', 'showNoOptionsFound', 'value'],
  outputs: ['admiraltyChange'],
  standalone: false
})
export class AdmiraltyAutocomplete {
  protected el: HTMLAdmiraltyAutocompleteElement;
  @Output() admiraltyChange = new EventEmitter<CustomEvent<IAdmiraltyAutocompleteAutoCompleteChangeEventDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AutoCompleteChangeEventDetail as IAdmiraltyAutocompleteAutoCompleteChangeEventDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltyAutocomplete extends Components.AdmiraltyAutocomplete {
  /**
   * Emitted when the value has changed.
   */
  admiraltyChange: EventEmitter<CustomEvent<IAdmiraltyAutocompleteAutoCompleteChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['value']
})
@Component({
  selector: 'admiralty-autocomplete-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['value'],
  standalone: false
})
export class AdmiraltyAutocompleteOption {
  protected el: HTMLAdmiraltyAutocompleteOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyAutocompleteOption extends Components.AdmiraltyAutocompleteOption { }


@ProxyCmp({
  inputs: ['active', 'href']
})
@Component({
  selector: 'admiralty-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'href'],
  standalone: false
})
export class AdmiraltyBreadcrumb {
  protected el: HTMLAdmiraltyBreadcrumbElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyBreadcrumb extends Components.AdmiraltyBreadcrumb { }


@ProxyCmp({
})
@Component({
  selector: 'admiralty-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AdmiraltyBreadcrumbs {
  protected el: HTMLAdmiraltyBreadcrumbsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyBreadcrumbs extends Components.AdmiraltyBreadcrumbs { }


@ProxyCmp({
  inputs: ['borderless', 'disabled', 'form', 'icon', 'name', 'type', 'value', 'variant']
})
@Component({
  selector: 'admiralty-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['borderless', 'disabled', 'form', 'icon', 'name', 'type', 'value', 'variant'],
  standalone: false
})
export class AdmiraltyButton {
  protected el: HTMLAdmiraltyButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyButton extends Components.AdmiraltyButton { }


@ProxyCmp({
  inputs: ['heading']
})
@Component({
  selector: 'admiralty-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['heading'],
  standalone: false
})
export class AdmiraltyCard {
  protected el: HTMLAdmiraltyCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyCard extends Components.AdmiraltyCard { }


@ProxyCmp({
  inputs: ['checkboxRight', 'checked', 'disabled', 'labelHidden', 'labelText', 'name', 'value']
})
@Component({
  selector: 'admiralty-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checkboxRight', 'checked', 'disabled', 'labelHidden', 'labelText', 'name', 'value'],
  outputs: ['admiraltyChange', 'checkboxFocus', 'checkboxBlur'],
  standalone: false
})
export class AdmiraltyCheckbox {
  protected el: HTMLAdmiraltyCheckboxElement;
  @Output() admiraltyChange = new EventEmitter<CustomEvent<IAdmiraltyCheckboxCheckboxChangeEventDetail>>();
  @Output() checkboxFocus = new EventEmitter<CustomEvent<FocusEvent>>();
  @Output() checkboxBlur = new EventEmitter<CustomEvent<FocusEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CheckboxChangeEventDetail as IAdmiraltyCheckboxCheckboxChangeEventDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltyCheckbox extends Components.AdmiraltyCheckbox {
  /**
   * Event is fired when the form control changes state @event admiraltyChange
   */
  admiraltyChange: EventEmitter<CustomEvent<IAdmiraltyCheckboxCheckboxChangeEventDetail>>;
  /**
   * Event is fired when the form control gains focus @event checkboxFocus
   */
  checkboxFocus: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Event is fired when the form control loses focus @event checkboxBlur
   */
  checkboxBlur: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['actionText', 'colour', 'enableCardEvent', 'heading', 'height', 'href', 'linkText', 'suppressRedirect', 'width']
})
@Component({
  selector: 'admiralty-colour-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionText', 'colour', 'enableCardEvent', 'heading', 'height', 'href', 'linkText', 'suppressRedirect', 'width'],
  outputs: ['colourBlockLinkClicked'],
  standalone: false
})
export class AdmiraltyColourBlock {
  protected el: HTMLAdmiraltyColourBlockElement;
  @Output() colourBlockLinkClicked = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyColourBlock extends Components.AdmiraltyColourBlock {
  /**
   * An event emitted when this Colour Block link is clicked
   */
  colourBlockLinkClicked: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['heading', 'sectionRole', 'type']
})
@Component({
  selector: 'admiralty-dialogue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['heading', 'sectionRole', 'type'],
  standalone: false
})
export class AdmiraltyDialogue {
  protected el: HTMLAdmiraltyDialogueElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyDialogue extends Components.AdmiraltyDialogue { }


@ProxyCmp({
  inputs: ['heading']
})
@Component({
  selector: 'admiralty-error-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['heading'],
  standalone: false
})
export class AdmiraltyErrorSummary {
  protected el: HTMLAdmiraltyErrorSummaryElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyErrorSummary extends Components.AdmiraltyErrorSummary { }


@ProxyCmp({
  inputs: ['alignHeadingRight', 'expanded', 'heading', 'hideBorder']
})
@Component({
  selector: 'admiralty-expansion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignHeadingRight', 'expanded', 'heading', 'hideBorder'],
  outputs: ['toggled'],
  standalone: false
})
export class AdmiraltyExpansion {
  protected el: HTMLAdmiraltyExpansionElement;
  @Output() toggled = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyExpansion extends Components.AdmiraltyExpansion {
  /**
   * The event that is dispatched when the expanded status is toggled.
   */
  toggled: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['invalid', 'invalidMessage', 'label', 'multiple']
})
@Component({
  selector: 'admiralty-file-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['invalid', 'invalidMessage', 'label', 'multiple'],
  outputs: ['fileInputChange'],
  standalone: false
})
export class AdmiraltyFileInput {
  protected el: HTMLAdmiraltyFileInputElement;
  @Output() fileInputChange = new EventEmitter<CustomEvent<IAdmiraltyFileInputFileInputChangeEventDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { FileInputChangeEventDetail as IAdmiraltyFileInputFileInputChangeEventDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltyFileInput extends Components.AdmiraltyFileInput {
  /**
   * Emitted when the added file(s) changes
   */
  fileInputChange: EventEmitter<CustomEvent<IAdmiraltyFileInputFileInputChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['filterTitle']
})
@Component({
  selector: 'admiralty-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['filterTitle'],
  outputs: ['filterCleared', 'filterApplied'],
  standalone: false
})
export class AdmiraltyFilter {
  protected el: HTMLAdmiraltyFilterElement;
  @Output() filterCleared = new EventEmitter<CustomEvent<void>>();
  @Output() filterApplied = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyFilter extends Components.AdmiraltyFilter {
  /**
   * Event that is emitted when the filters are cleared
   */
  filterCleared: EventEmitter<CustomEvent<void>>;
  /**
   * Event that is emitted when the filters are applied
   */
  filterApplied: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['groupTitle']
})
@Component({
  selector: 'admiralty-filter-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['groupTitle'],
  standalone: false
})
export class AdmiraltyFilterGroup {
  protected el: HTMLAdmiraltyFilterGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyFilterGroup extends Components.AdmiraltyFilterGroup { }


@ProxyCmp({
  inputs: ['imageAlt', 'imageLink', 'imageSrc', 'text', 'variant']
})
@Component({
  selector: 'admiralty-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['imageAlt', 'imageLink', 'imageSrc', 'text', 'variant'],
  standalone: false
})
export class AdmiraltyFooter {
  protected el: HTMLAdmiraltyFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyFooter extends Components.AdmiraltyFooter { }


@ProxyCmp({
  inputs: ['headerTitle', 'headerTitleUrl', 'logoAltText', 'logoImgUrl', 'logoLinkUrl']
})
@Component({
  selector: 'admiralty-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['headerTitle', 'headerTitleUrl', 'logoAltText', 'logoImgUrl', 'logoLinkUrl'],
  outputs: ['titledClicked'],
  standalone: false
})
export class AdmiraltyHeader {
  protected el: HTMLAdmiraltyHeaderElement;
  @Output() titledClicked = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyHeader extends Components.AdmiraltyHeader {
  /**
   * Emits an event that can be listened to when the title in the header is clicked
   */
  titledClicked: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['active', 'menuTitle']
})
@Component({
  selector: 'admiralty-header-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'menuTitle'],
  outputs: ['menuItemClick'],
  standalone: false
})
export class AdmiraltyHeaderMenuItem {
  protected el: HTMLAdmiraltyHeaderMenuItemElement;
  @Output() menuItemClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyHeaderMenuItem extends Components.AdmiraltyHeaderMenuItem {
  /**
   * The event that is fired when a user clicks on the menu
   */
  menuItemClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['active', 'href', 'menuTitle', 'suppressRedirect']
})
@Component({
  selector: 'admiralty-header-menu-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'href', 'menuTitle', 'suppressRedirect'],
  outputs: ['menuItemClick'],
  standalone: false
})
export class AdmiraltyHeaderMenuLink {
  protected el: HTMLAdmiraltyHeaderMenuLinkElement;
  @Output() menuItemClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyHeaderMenuLink extends Components.AdmiraltyHeaderMenuLink {
  /**
   * The event that is fired when a user clicks on the menu.
   */
  menuItemClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['isSignedIn', 'signInOnly', 'signedInText']
})
@Component({
  selector: 'admiralty-header-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isSignedIn', 'signInOnly', 'signedInText'],
  outputs: ['signInClicked', 'yourAccountClicked', 'signOutClicked'],
  standalone: false
})
export class AdmiraltyHeaderProfile {
  protected el: HTMLAdmiraltyHeaderProfileElement;
  @Output() signInClicked = new EventEmitter<CustomEvent<void>>();
  @Output() yourAccountClicked = new EventEmitter<CustomEvent<void>>();
  @Output() signOutClicked = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyHeaderProfile extends Components.AdmiraltyHeaderProfile {
  /**
   * The event that is fired when the user clicks on
the sign in button
   */
  signInClicked: EventEmitter<CustomEvent<void>>;
  /**
   * The event that is fired when the user clicks on the
'Your account' button
   */
  yourAccountClicked: EventEmitter<CustomEvent<void>>;
  /**
   * The event that is fired when the user clicks on the
'sign out' button
   */
  signOutClicked: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['href', 'menuTitle', 'suppressRedirect']
})
@Component({
  selector: 'admiralty-header-sub-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'menuTitle', 'suppressRedirect'],
  outputs: ['subMenuItemClick'],
  standalone: false
})
export class AdmiraltyHeaderSubMenuItem {
  protected el: HTMLAdmiraltyHeaderSubMenuItemElement;
  @Output() subMenuItemClick = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyHeaderSubMenuItem extends Components.AdmiraltyHeaderSubMenuItem {
  /**
   * The event that is fired when a user clicks on the menu item.
Event contains the menu item text.
   */
  subMenuItemClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'admiralty-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
  standalone: false
})
export class AdmiraltyHint {
  protected el: HTMLAdmiraltyHintElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyHint extends Components.AdmiraltyHint { }


@ProxyCmp({
})
@Component({
  selector: 'admiralty-hr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AdmiraltyHr {
  protected el: HTMLAdmiraltyHrElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyHr extends Components.AdmiraltyHr { }


@ProxyCmp({
  inputs: ['name', 'size']
})
@Component({
  selector: 'admiralty-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'size'],
  standalone: false
})
export class AdmiraltyIcon {
  protected el: HTMLAdmiraltyIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyIcon extends Components.AdmiraltyIcon { }


@ProxyCmp({
  inputs: ['iconSideBarWidth', 'label', 'logoImgUrl', 'showLogo']
})
@Component({
  selector: 'admiralty-icon-side-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['iconSideBarWidth', 'label', 'logoImgUrl', 'showLogo'],
  standalone: false
})
export class AdmiraltyIconSideBar {
  protected el: HTMLAdmiraltyIconSideBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyIconSideBar extends Components.AdmiraltyIconSideBar { }


@ProxyCmp({
  inputs: ['active', 'expanded', 'href', 'icon', 'itemText', 'suppressRedirect']
})
@Component({
  selector: 'admiralty-icon-side-bar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'expanded', 'href', 'icon', 'itemText', 'suppressRedirect'],
  outputs: ['toggled', 'iconSideBarItemClick'],
  standalone: false
})
export class AdmiraltyIconSideBarItem {
  protected el: HTMLAdmiraltyIconSideBarItemElement;
  @Output() toggled = new EventEmitter<CustomEvent<boolean>>();
  @Output() iconSideBarItemClick = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyIconSideBarItem extends Components.AdmiraltyIconSideBarItem {
  /**
   * The event that is dispatched when the expanded status is toggled.
   */
  toggled: EventEmitter<CustomEvent<boolean>>;
  /**
   * An event emitted when this Side Bar item is selected containing the sideBarItemId
   */
  iconSideBarItemClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['autocomplete', 'disabled', 'hint', 'invalid', 'invalidMessage', 'label', 'name', 'placeholder', 'required', 'type', 'value', 'width']
})
@Component({
  selector: 'admiralty-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'hint', 'invalid', 'invalidMessage', 'label', 'name', 'placeholder', 'required', 'type', 'value', 'width'],
  outputs: ['admiraltyInput', 'admiraltyFocus', 'admiraltyBlur'],
  standalone: false
})
export class AdmiraltyInput {
  protected el: HTMLAdmiraltyInputElement;
  @Output() admiraltyInput = new EventEmitter<CustomEvent<IAdmiraltyInputInputChangeEventDetail>>();
  @Output() admiraltyFocus = new EventEmitter<CustomEvent<FocusEvent>>();
  @Output() admiraltyBlur = new EventEmitter<CustomEvent<FocusEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { InputChangeEventDetail as IAdmiraltyInputInputChangeEventDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltyInput extends Components.AdmiraltyInput {
  /**
   * Emitted when the value has changed.
   */
  admiraltyInput: EventEmitter<CustomEvent<IAdmiraltyInputInputChangeEventDetail>>;
  /**
   * Emitted when the input gains focus.
   */
  admiraltyFocus: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input loses focus.
   */
  admiraltyBlur: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'admiralty-input-invalid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AdmiraltyInputInvalid {
  protected el: HTMLAdmiraltyInputInvalidElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyInputInvalid extends Components.AdmiraltyInputInvalid { }


@ProxyCmp({
  inputs: ['disabled', 'for']
})
@Component({
  selector: 'admiralty-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'for'],
  standalone: false
})
export class AdmiraltyLabel {
  protected el: HTMLAdmiraltyLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyLabel extends Components.AdmiraltyLabel { }


@ProxyCmp({
  inputs: ['href', 'newTab']
})
@Component({
  selector: 'admiralty-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'newTab'],
  standalone: false
})
export class AdmiraltyLink {
  protected el: HTMLAdmiraltyLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyLink extends Components.AdmiraltyLink { }


@ProxyCmp({
  inputs: ['description', 'heading', 'label', 'show']
})
@Component({
  selector: 'admiralty-modal-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'heading', 'label', 'show'],
  standalone: false
})
export class AdmiraltyModalDialog {
  protected el: HTMLAdmiraltyModalDialogElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyModalDialog extends Components.AdmiraltyModalDialog { }


@ProxyCmp({
  inputs: ['currentPage', 'label', 'pages']
})
@Component({
  selector: 'admiralty-paginator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'label', 'pages'],
  outputs: ['pageChange'],
  standalone: false
})
export class AdmiraltyPaginator {
  protected el: HTMLAdmiraltyPaginatorElement;
  @Output() pageChange = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyPaginator extends Components.AdmiraltyPaginator {
  /**
   * Dispatched when the previous or next button is pressed. The event detail contains
the requested page number.
   */
  pageChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['link', 'phase']
})
@Component({
  selector: 'admiralty-phase-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['link', 'phase'],
  standalone: false
})
export class AdmiraltyPhaseBanner {
  protected el: HTMLAdmiraltyPhaseBannerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyPhaseBanner extends Components.AdmiraltyPhaseBanner { }


@ProxyCmp({
  inputs: ['colour', 'label', 'number', 'selected', 'text']
})
@Component({
  selector: 'admiralty-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['colour', 'label', 'number', 'selected', 'text'],
  standalone: false
})
export class AdmiraltyPill {
  protected el: HTMLAdmiraltyPillElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyPill extends Components.AdmiraltyPill { }


@ProxyCmp({
  inputs: ['error', 'label', 'progression']
})
@Component({
  selector: 'admiralty-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['error', 'label', 'progression'],
  standalone: false
})
export class AdmiraltyProgressBar {
  protected el: HTMLAdmiraltyProgressBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyProgressBar extends Components.AdmiraltyProgressBar { }


@ProxyCmp({
  inputs: ['allowBackNavigation', 'allowForwardNavigation']
})
@Component({
  selector: 'admiralty-progress-tracker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowBackNavigation', 'allowForwardNavigation'],
})
export class AdmiraltyProgressTracker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stepClicked']);
  }
}


import type { StepNavigationDetail as IAdmiraltyProgressTrackerStepNavigationDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltyProgressTracker extends Components.AdmiraltyProgressTracker {
  /**
   * Emitted when user clicks on a step
   */
  stepClicked: EventEmitter<CustomEvent<IAdmiraltyProgressTrackerStepNavigationDetail>>;
}


@ProxyCmp({
  inputs: ['status', 'stepId', 'stepTitle', 'summary']
})
@Component({
  selector: 'admiralty-progress-tracker-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status', 'stepId', 'stepTitle', 'summary'],
})
export class AdmiraltyProgressTrackerStep {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyProgressTrackerStep extends Components.AdmiraltyProgressTrackerStep { }


@ProxyCmp({
  inputs: ['checked', 'disabled', 'invalid', 'name', 'value']
})
@Component({
  selector: 'admiralty-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'invalid', 'name', 'value'],
  outputs: ['admiraltyFocus', 'admiraltyBlur', 'admiraltyChange'],
  standalone: false
})
export class AdmiraltyRadio {
  protected el: HTMLAdmiraltyRadioElement;
  @Output() admiraltyFocus = new EventEmitter<CustomEvent<void>>();
  @Output() admiraltyBlur = new EventEmitter<CustomEvent<void>>();
  @Output() admiraltyChange = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyRadio extends Components.AdmiraltyRadio {
  /**
   * Emitted when the radio button gains focus.
   */
  admiraltyFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio button loses focus.
   */
  admiraltyBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio is selected
   */
  admiraltyChange: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'displayVertical', 'hint', 'invalid', 'invalidMessage', 'label', 'name', 'value']
})
@Component({
  selector: 'admiralty-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'displayVertical', 'hint', 'invalid', 'invalidMessage', 'label', 'name', 'value'],
  outputs: ['admiraltyChange'],
  standalone: false
})
export class AdmiraltyRadioGroup {
  protected el: HTMLAdmiraltyRadioGroupElement;
  @Output() admiraltyChange = new EventEmitter<CustomEvent<IAdmiraltyRadioGroupRadioGroupChangeEventDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RadioGroupChangeEventDetail as IAdmiraltyRadioGroupRadioGroupChangeEventDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltyRadioGroup extends Components.AdmiraltyRadioGroup {
  /**
   * Event fired when the checked radio button changes
   */
  admiraltyChange: EventEmitter<CustomEvent<IAdmiraltyRadioGroupRadioGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['heading']
})
@Component({
  selector: 'admiralty-read-more',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['heading'],
  outputs: ['admiraltyToggled'],
  standalone: false
})
export class AdmiraltyReadMore {
  protected el: HTMLAdmiraltyReadMoreElement;
  @Output() admiraltyToggled = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyReadMore extends Components.AdmiraltyReadMore {
  /**
   * The event that is dispatched when the expanded status is toggled.
   */
  admiraltyToggled: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['disabled', 'hint', 'invalid', 'invalidMessage', 'label', 'value', 'width']
})
@Component({
  selector: 'admiralty-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'hint', 'invalid', 'invalidMessage', 'label', 'value', 'width'],
  outputs: ['admiraltyChange', 'admiraltyBlur'],
  standalone: false
})
export class AdmiraltySelect {
  protected el: HTMLAdmiraltySelectElement;
  @Output() admiraltyChange = new EventEmitter<CustomEvent<IAdmiraltySelectSelectChangeEventDetail>>();
  @Output() admiraltyBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { SelectChangeEventDetail as IAdmiraltySelectSelectChangeEventDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltySelect extends Components.AdmiraltySelect {
  /**
   * Emitted when the value has changed.
   */
  admiraltyChange: EventEmitter<CustomEvent<IAdmiraltySelectSelectChangeEventDetail>>;
  /**
   * Emitted when the component loses focus.
   */
  admiraltyBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'admiralty-side-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
  standalone: false
})
export class AdmiraltySideNav {
  protected el: HTMLAdmiraltySideNavElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltySideNav extends Components.AdmiraltySideNav { }


@ProxyCmp({
  inputs: ['headingTitle', 'navActive', 'sideNavItemId']
})
@Component({
  selector: 'admiralty-side-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['headingTitle', 'navActive', 'sideNavItemId'],
  outputs: ['sideNavItemSelected'],
  standalone: false
})
export class AdmiraltySideNavItem {
  protected el: HTMLAdmiraltySideNavItemElement;
  @Output() sideNavItemSelected = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltySideNavItem extends Components.AdmiraltySideNavItem {
  /**
   * An event emitted when this Side Nav item is selected containing the sideNavItemId
   */
  sideNavItemSelected: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['height', 'noAnimation', 'radius', 'width']
})
@Component({
  selector: 'admiralty-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'noAnimation', 'radius', 'width'],
  standalone: false
})
export class AdmiraltySkeleton {
  protected el: HTMLAdmiraltySkeletonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltySkeleton extends Components.AdmiraltySkeleton { }


@ProxyCmp({
  inputs: ['href']
})
@Component({
  selector: 'admiralty-skip-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
  standalone: false
})
export class AdmiraltySkipLink {
  protected el: HTMLAdmiraltySkipLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltySkipLink extends Components.AdmiraltySkipLink { }


@ProxyCmp({
  inputs: ['label', 'tabContentId', 'tabLabelId']
})
@Component({
  selector: 'admiralty-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'tabContentId', 'tabLabelId'],
  standalone: false
})
export class AdmiraltyTab {
  protected el: HTMLAdmiraltyTabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTab extends Components.AdmiraltyTab { }


@ProxyCmp({
  inputs: ['selectedIndex']
})
@Component({
  selector: 'admiralty-tab-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selectedIndex'],
  outputs: ['admiraltyTabSelected'],
  standalone: false
})
export class AdmiraltyTabGroup {
  protected el: HTMLAdmiraltyTabGroupElement;
  @Output() admiraltyTabSelected = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTabGroup extends Components.AdmiraltyTabGroup {

  admiraltyTabSelected: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['caption']
})
@Component({
  selector: 'admiralty-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption'],
  standalone: false
})
export class AdmiraltyTable {
  protected el: HTMLAdmiraltyTableElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTable extends Components.AdmiraltyTable { }


@ProxyCmp({
})
@Component({
  selector: 'admiralty-table-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AdmiraltyTableBody {
  protected el: HTMLAdmiraltyTableBodyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTableBody extends Components.AdmiraltyTableBody { }


@ProxyCmp({
})
@Component({
  selector: 'admiralty-table-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AdmiraltyTableCell {
  protected el: HTMLAdmiraltyTableCellElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTableCell extends Components.AdmiraltyTableCell { }


@ProxyCmp({
})
@Component({
  selector: 'admiralty-table-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AdmiraltyTableHeader {
  protected el: HTMLAdmiraltyTableHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTableHeader extends Components.AdmiraltyTableHeader { }


@ProxyCmp({
})
@Component({
  selector: 'admiralty-table-header-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AdmiraltyTableHeaderCell {
  protected el: HTMLAdmiraltyTableHeaderCellElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTableHeaderCell extends Components.AdmiraltyTableHeaderCell { }


@ProxyCmp({
})
@Component({
  selector: 'admiralty-table-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AdmiraltyTableRow {
  protected el: HTMLAdmiraltyTableRowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTableRow extends Components.AdmiraltyTableRow { }


@ProxyCmp({
  inputs: ['label', 'logoImgUrl', 'showLogo', 'textSideBarWidth']
})
@Component({
  selector: 'admiralty-text-side-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'logoImgUrl', 'showLogo', 'textSideBarWidth'],
  standalone: false
})
export class AdmiraltyTextSideBar {
  protected el: HTMLAdmiraltyTextSideBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTextSideBar extends Components.AdmiraltyTextSideBar { }


@ProxyCmp({
  inputs: ['active', 'expanded', 'href', 'icon', 'itemText', 'suppressRedirect', 'variant']
})
@Component({
  selector: 'admiralty-text-side-bar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'expanded', 'href', 'icon', 'itemText', 'suppressRedirect', 'variant'],
  outputs: ['toggled', 'textSideBarItemClick'],
  standalone: false
})
export class AdmiraltyTextSideBarItem {
  protected el: HTMLAdmiraltyTextSideBarItemElement;
  @Output() toggled = new EventEmitter<CustomEvent<boolean>>();
  @Output() textSideBarItemClick = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTextSideBarItem extends Components.AdmiraltyTextSideBarItem {
  /**
   * The event that is dispatched when the expanded status is toggled.
   */
  toggled: EventEmitter<CustomEvent<boolean>>;
  /**
   * An event emitted when this Side Bar item is selected containing the sideBarItemId
   */
  textSideBarItemClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'hint', 'invalid', 'invalidMessage', 'label', 'value', 'width']
})
@Component({
  selector: 'admiralty-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'hint', 'invalid', 'invalidMessage', 'label', 'value', 'width'],
  outputs: ['textareaBlur', 'admiraltyInput'],
  standalone: false
})
export class AdmiraltyTextarea {
  protected el: HTMLAdmiraltyTextareaElement;
  @Output() textareaBlur = new EventEmitter<CustomEvent<any>>();
  @Output() admiraltyInput = new EventEmitter<CustomEvent<IAdmiraltyTextareaTextAreaChangeEventDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { TextAreaChangeEventDetail as IAdmiraltyTextareaTextAreaChangeEventDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltyTextarea extends Components.AdmiraltyTextarea {
  /**
   * Event is fired when the form control loses focus @event textareaBlur
   */
  textareaBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Event is fired when the form control changes @event admiraltyChange
   */
  admiraltyInput: EventEmitter<CustomEvent<IAdmiraltyTextareaTextAreaChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'disabled', 'theme']
})
@Component({
  selector: 'admiralty-theme-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'theme'],
})
export class AdmiraltyThemeToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['admiraltyThemeChange']);
  }
}


import type { ThemeToggleChangeEventDetail as IAdmiraltyThemeToggleThemeToggleChangeEventDetail } from '@ukho/admiralty-core';

export declare interface AdmiraltyThemeToggle extends Components.AdmiraltyThemeToggle {
  /**
   * Event is fired when the theme preference changes @event admiraltyThemeChange
   */
  admiraltyThemeChange: EventEmitter<CustomEvent<IAdmiraltyThemeToggleThemeToggleChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['alignment', 'for', 'placement']
})
@Component({
  selector: 'admiralty-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'for', 'placement'],
})
export class AdmiraltyTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AdmiraltyTooltip extends Components.AdmiraltyTooltip { }


