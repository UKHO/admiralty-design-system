import { SidenavComponent } from './sidenav.component';
import { mockSideNav } from './mocknavigation';
import { createHostFactory } from '@ngneat/spectator/jest';

describe('SidenavComponent', () => {
  const createHost = createHostFactory(SidenavComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-sidenav></ukho-sidenav>');
    expect(spectator.component).toBeTruthy();
  });

  it('should render the section headings correctly', () => {
    const spectator = createHost('<ukho-sidenav [navigation]="mockNav"></ukho-sidenav>', {
      hostProps: {
        mockNav: mockSideNav
      }
    });
    const headings = spectator.queryAll('h2');
    headings.forEach((heading, i) => {
      expect(heading.textContent).toEqual(mockSideNav[i].title);
    });
  });
});
