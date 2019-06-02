import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { DebugElement } from '@angular/core';
import {mockSideNav} from "./mocknavigation";

describe('SidenavComponent', () => {
    let component: SidenavComponent;
    let fixture: ComponentFixture<SidenavComponent>;
    let compiled: DebugElement['nativeElement'];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SidenavComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidenavComponent);
        component = fixture.componentInstance;
        component.navigation = mockSideNav;
        fixture.detectChanges();
        compiled = fixture.nativeElement;
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

});
