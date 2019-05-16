import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DebugElement } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let compiled: DebugElement['nativeElement']
  
  const testLabel = 'test label'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.label = testLabel
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input label as button text', () => {
    const text = compiled.querySelector('p')
    expect(text.textContent.trim()).toEqual(testLabel)
  })

  it('should not have an icon when no icon is passed', () => {
    const maybeIcon = compiled.querySelector('i')
    expect(maybeIcon).toBeNull()
  })

  it('should render an icon when an icon is passed', () => {
    component.icon = 'fa-chevron-left'
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const icon = compiled.querySelector('i')
    expect(icon.className).toBe('fa fa-chevron-left')
  })

  it('should have the secondary class is isSecondary is true', () => {
    component.isSecondary = true
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const button = compiled.querySelector('button')
    expect(button.className).toBe('secondary')
  })
});
