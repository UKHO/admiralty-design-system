import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material/radio';

import { RadioGroupComponent } from './radio-group.component';
import { DebugElement } from '@angular/core';

describe('RadioComponent', () => {
  let component: RadioGroupComponent;
  let fixture: ComponentFixture<RadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatRadioModule],
      declarations: [RadioGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
