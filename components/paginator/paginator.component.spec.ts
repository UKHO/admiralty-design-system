import { createHostFactory } from '@ngneat/spectator/jest';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  const createHost = createHostFactory(PaginatorComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 10,
        currentPage: 1,
      },
    });
    expect(spectator.component).toBeTruthy();
    expect(spectator.query('nav.standard')).toBeTruthy();
  });

  it('when label is set then setLabel() is called', () => {
    const expectedLabel = 'Test Label';

    const spectator = createHost(
      '<ukho-paginator [pages]="pages" [currentPage]="currentPage" [label]="label"></ukho-paginator>',
      {
        hostProps: {
          pages: 1,
          currentPage: 1,
        },
        props: {
          setLabel: jest.fn(),
        },
      },
    );
    jest.resetAllMocks();

    expect(spectator.component.setLabel).not.toBeCalled();
    spectator.setInput('label', expectedLabel);
    expect(spectator.component.setLabel).toHaveBeenCalledTimes(1);
    expect(spectator.component.setLabel).toBeCalledWith(expectedLabel);
  });

  it.each([
    [null, ''],
    ['', ''],
    ['test ', 'test'],
  ])('when label is set with "%s" then label is displayed as "%s"', (label, expectedLabel) => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 1,
        currentPage: 1,
      },
    });

    spectator.setInput('label', label);

    const pElement = spectator.query('nav.standard > p');
    expect(pElement).toBeTruthy();
    expect(pElement).toHaveText(expectedLabel);
  });

  it('when inputs are set then the pageChange event is not emitted', () => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 1,
        currentPage: 1,
      },
    });

    const emitSpy = jest.spyOn(spectator.component.pageChange, 'emit');

    spectator.component.pages = 5;
    spectator.component.currentPage = 5;
    spectator.component.label = 'IGNORE';

    expect(emitSpy).not.toBeCalled();
  });

  it('when setPage() is called then pageChange is emitted with expected page', () => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 1,
        currentPage: 1,
      },
    });

    const emitSpy = jest.spyOn(spectator.component.pageChange, 'emit');

    const expectedPage = 5;

    expect(emitSpy).not.toBeCalled();
    spectator.component.setPage(expectedPage);
    expect(emitSpy).toBeCalledTimes(1);
    expect(emitSpy).toBeCalledWith(expectedPage);
  });

  it.each([
    [2, 2, 1],
    [2, 3, 1],
    [3, 3, 2],
  ])(
    'given page %d of %d when prev() is called then setPage() is called with %d',
    (currentPage, pages, expectedPage) => {
      const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
        hostProps: {
          pages,
          currentPage,
        },
      });
      spectator.component.setPage = jest.fn();

      expect(spectator.component.setPage).not.toBeCalled();
      spectator.component.prev();
      expect(spectator.component.setPage).toHaveBeenCalledTimes(1);
      expect(spectator.component.setPage).toBeCalledWith(expectedPage);
    },
  );

  it.each([
    [1, 2, 2],
    [2, 3, 3],
    [1, 3, 2],
  ])(
    'given page %d of %d when next() is called then setPage() is called with %d',
    (currentPage, pages, expectedPage) => {
      const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
        hostProps: {
          pages,
          currentPage,
        },
      });
      spectator.component.setPage = jest.fn();

      expect(spectator.component.setPage).not.toBeCalled();
      spectator.component.next();
      expect(spectator.component.setPage).toHaveBeenCalledTimes(1);
      expect(spectator.component.setPage).toBeCalledWith(expectedPage);
    },
  );

  it('given matching current page 1 and total pages 1 when prev() is called then setPage() is not called', () => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 1,
        currentPage: 1,
      },
    });
    spectator.component.setPage = jest.fn();

    expect(spectator.component.setPage).not.toBeCalled();
    spectator.component.prev();
    expect(spectator.component.setPage).not.toBeCalled();
  });

  it('given matching current page 1 and total pages 1 when next() is called then setPage() is not called', () => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 1,
        currentPage: 1,
      },
    });
    spectator.component.setPage = jest.fn();

    expect(spectator.component.setPage).not.toBeCalled();
    spectator.component.next();
    expect(spectator.component.setPage).not.toBeCalled();
  });

  it('should allow prev() & next() when input is changed', () => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 1,
        currentPage: 1,
      },
    });

    //Reset pages for next()
    spectator.setInput('pages', 3);
    spectator.setInput('currentPage', 2);

    const emitSpy = jest.spyOn(spectator.component.pageChange, 'emit');

    spectator.component.next();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toBeCalledWith(3);

    //Reset pages for prev()
    spectator.setInput('pages', 3);
    spectator.setInput('currentPage', 2);

    emitSpy.mockReset();

    spectator.component.prev();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toBeCalledWith(1);
  });

  it('left-hand button calls prev()', () => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 3,
        currentPage: 2,
      },
      props: {
        prev: jest.fn(),
      },
    });

    expect(spectator.component.prev).not.toHaveBeenCalled();
    spectator.click('a.pagination-anchor:nth-of-type(1)');
    expect(spectator.component.prev).toBeCalled();
  });

  it('right-hand button calls next()', () => {
    const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
      hostProps: {
        pages: 3,
        currentPage: 2,
      },
      props: {
        next: jest.fn(),
      },
    });

    expect(spectator.component.next).not.toHaveBeenCalled();
    spectator.click('a.pagination-anchor:nth-of-type(2)');
    expect(spectator.component.next).toBeCalled();
  });

  it.each([
    [1, 1, false, false],
    [1, 6, false, true],
    [6, 6, true, false],
    [3, 6, true, true],
  ])(
    'given page %d of %d then button states are enabled: %o & enabled: %o',
    (currentPage, pages, expectedLeftButtonEnabledState, expectedRightButtonEnabledState) => {
      const spectator = createHost('<ukho-paginator [pages]="pages" [currentPage]="currentPage"></ukho-paginator>', {
        hostProps: {
          pages,
          currentPage,
        },
      });

      expect(!spectator.query('a.pagination-anchor:nth-of-type(1)').classList.contains('disabled')).toBe(
        expectedLeftButtonEnabledState,
      );
      expect(!spectator.query('a.pagination-anchor:nth-of-type(2)').classList.contains('disabled')).toBe(
        expectedRightButtonEnabledState,
      );
    },
  );
});
