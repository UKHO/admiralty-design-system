import { NavigationComponent } from './navigation.component';

import { mockNavigationWithSections } from './mocknavigation';
import { createHostFactory } from '@ngneat/spectator/jest';

describe('NavigationComponent', () => {
  const createHost = createHostFactory(NavigationComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-navigation [navigation]="mockNav"></ukho-navigation>', {
      hostProps: {
        mockNav: mockNavigationWithSections
      }
    });
    expect(spectator.component).toBeTruthy();
  });

  it('should render the navigation heading', () => {
    const spectator = createHost('<ukho-navigation [navigation]="mockNav"></ukho-navigation>', {
      hostProps: {
        mockNav: mockNavigationWithSections
      }
    });
    const headings = spectator.queryAll('h1');
    expect(headings.length).toBe(1);
    headings.forEach((heading) => {
      expect(heading.textContent).toEqual(mockNavigationWithSections.heading);
    });
  });

  it('should render the section headings correctly', () => {
    const spectator = createHost('<ukho-navigation [navigation]="mockNav"></ukho-navigation>', {
      hostProps: {
        mockNav: mockNavigationWithSections
      }
    });
    const headings = spectator.queryAll('.section > a');
    headings.forEach((heading, i) => {
      expect(heading.textContent).toEqual(mockNavigationWithSections.sections[i].title);
    });
  });

  it('should render the sub section headings correctly', () => {
    const spectator = createHost('<ukho-navigation [navigation]="mockNav"></ukho-navigation>', {
      hostProps: {
        mockNav: mockNavigationWithSections
      }
    });
    const sections = spectator.queryAll('.section');
    sections.forEach((section, i) => {
      const subSections = section.querySelectorAll('.sub-section');
      subSections.forEach((subSection, j) => {
        const subHeading = subSection.querySelector('h2');
        expect(subHeading.textContent).toEqual(mockNavigationWithSections.sections[i].subSections[j].title);
      });
    });
  });

  it('should render the sub section items correctly', () => {
    const spectator = createHost('<ukho-navigation [navigation]="mockNav"></ukho-navigation>', {
      hostProps: {
        mockNav: mockNavigationWithSections
      }
    });
    const sections = spectator.queryAll('.section');
    sections.forEach((section, i) => {
      const subSections = section.querySelectorAll('.sub-section');
      subSections.forEach((subSection, j) => {
        const items = subSection.querySelectorAll('li > a');
        items.forEach((item, k) => {
          expect(item.textContent).toEqual(mockNavigationWithSections.sections[i].subSections[j].items[k].title);
        });
      });
    });
  });
});
