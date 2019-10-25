import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { DebugElement } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let compiled: DebugElement['nativeElement'];

  const testTitle = 'test title';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title in an H6', () => {
    component.title = testTitle;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const text = compiled.querySelector('h6');
    expect(text.textContent.trim()).toEqual(testTitle);
  });

  it('should not render an H6 if no title is passed', () => {
    component.title = '';
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const title = compiled.querySelector('H6');
    expect(title).toBeNull();
  });
});
