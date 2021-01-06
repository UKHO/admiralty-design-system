import { createHostFactory } from '@ngneat/spectator/jest';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  const createHost = createHostFactory(PaginatorComponent);

  it('should create', () => {
    const spectator = createHost(
      '<ukho-paginator [pages]="pages" [currentPage]="currentPage" (pageChange)="pageChange($event)"></ukho-paginator>',
      {
        hostProps: {
          pages: 10,
          currentPage: 1
        }
      }
    );
    expect(spectator.component).toBeTruthy();
  });
});
