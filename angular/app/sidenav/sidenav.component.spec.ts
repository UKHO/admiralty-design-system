import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { DebugElement } from '@angular/core';
import {mockSideNav} from "./mocknavigation";

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let compiled: DebugElement['nativeElement'];

  const testTitle = 'test title';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section headings correctly', () => {
    const headings = compiled.querySelectorAll('h2');
    headings.forEach((heading, i) => {
      expect(heading.textContent).toEqual(mockSideNav[i].title);
    })
  });

  // it('should render the sub section headings correctly', () => {
  //   const sections = compiled.querySelectorAll('.section');
  //   sections.forEach((section, i) => {
  //     const subSections = section.querySelectorAll('.sub-section');
  //     subSections.forEach((subSection, j) => {
  //       const subHeading = subSection.querySelector('h2');
  //       expect(subHeading.textContent).toEqual(mockNavigation.sections[i].subSections[j].title);
  //     })
  //   })
  // })
  //
  // it('should render the sub section items correctly', () => {
  //   const sections = compiled.querySelectorAll('.section');
  //   sections.forEach((section, i) => {
  //     const subSections = section.querySelectorAll('.sub-section')
  //     subSections.forEach((subSection, j) => {
  //       const items = subSection.querySelectorAll('li > a')
  //       items.forEach((item, k) => {
  //         expect(item.textContent).toEqual(mockNavigation.sections[i].subSections[j].items[k].title);
  //       });
  //     });
  //   });
  // });
  //

});
