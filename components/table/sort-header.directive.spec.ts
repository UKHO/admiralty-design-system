import { UkhoSortHeader } from './sort-header.directive';
import { UkhoSort } from './sort.directive';
import { UkhoColumnDef } from './cell.directive';

describe('SortHeaderDirective', () => {
  it('should create an instance', () => {
    const directive = new UkhoSortHeader(new UkhoSort(), new UkhoColumnDef());
    expect(directive).toBeTruthy();
  });
});
