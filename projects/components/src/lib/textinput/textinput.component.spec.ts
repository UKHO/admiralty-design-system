import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TextinputComponent } from './textinput.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TextinputComponent', () => {
  let component: TextinputComponent;
  let fixture: ComponentFixture<TextinputComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ReactiveFormsModule, FormsModule],
      declarations: [TextinputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextinputComponent);
    component = fixture.componentInstance;
    component.writeValue('test text value');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reflect isDisable state', () => {
    component.setDisabledState(true);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const input = compiled.querySelector('input');
    expect(input.getAttribute('ng-reflect-disabled')).toBe('true');
  });

  it('should reflect inputText', () => {
    compiled = fixture.nativeElement;
    const input = compiled.querySelector('input');
    expect(input.getAttribute('ng-reflect-model')).toBe('test text value');
  });

  it('should reflect isValid', () => {
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const formField = compiled.querySelector('mat-form-field');
    expect(formField.classList.contains('valid')).toBe(true);
  });
});
