import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

import { mockNavigation } from './mocknavigation';
import { DebugElement } from '@angular/core';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    component.navigation = mockNavigation;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navigation heading', () => {
    const headings = compiled.querySelectorAll('h1');
    expect(headings.length).toBe(2);
    headings.forEach((heading) => {
      expect(heading.textContent).toEqual(mockNavigation.heading);
    })
  });

  it('should render the section headings correctly', () => {
    const headings = compiled.querySelectorAll('.section > a');
    headings.forEach((heading, i) => {
      expect(heading.textContent).toEqual(mockNavigation.sections[i].title);
    })
  })

  it('should render the sub section headings correctly', () => {
    const sections = compiled.querySelectorAll('.section');
    sections.forEach((section, i) => {
      const subSections = section.querySelectorAll('.sub-section')
      subSections.forEach((subSection, j) => {
        const subHeading = subSection.querySelector('h2');
        expect(subHeading.textContent).toEqual(mockNavigation.sections[i].subSections[j].title);
      })
    })
  })

  it('should render the sub section items correctly', () => {
    const sections = compiled.querySelectorAll('.section');
    sections.forEach((section, i) => {
      const subSections = section.querySelectorAll('.sub-section')
      subSections.forEach((subSection, j) => {
        const items = subSection.querySelectorAll('li > a')
        items.forEach((item, k) => {
          expect(item.textContent).toEqual(mockNavigation.sections[i].subSections[j].items[k].title);
        });
      });
    });
  });
});
