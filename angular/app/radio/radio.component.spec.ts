import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material';

import { RadioComponent } from './radio.component';
import { DebugElement } from '@angular/core';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatRadioModule ],
      declarations: [ RadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds is-column class if isColumn is true', () => {
    component.isColumn = true;
    fixture.detectChanges()
    compiled = fixture.nativeElement;
    const radioGroup = compiled.querySelector('.mat-radio-group')
    expect(radioGroup.classList.contains('is-column')).toBe(true);
  });
});
