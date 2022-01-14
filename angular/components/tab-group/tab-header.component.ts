import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { Component, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ukho-tab-header',
  templateUrl: './tab-header.component.html',
})
export class TabHeaderComponent implements FocusableOption {
  constructor(private _elementRef: ElementRef) {}
  focus(_origin?: FocusOrigin): void {
    this._elementRef.nativeElement.focus();
  }
}
