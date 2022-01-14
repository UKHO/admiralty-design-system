import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let spectator: SpectatorHost<BreadcrumbsComponent>;
  const createHost = createHostFactory({ component: BreadcrumbsComponent, disableAnimations: true });

  it('should create', () => {
    spectator = createHost('<ukho-breadcrumbs></ukho-breadcrumbs>');
    expect(spectator.component).toBeTruthy();
  });
});
