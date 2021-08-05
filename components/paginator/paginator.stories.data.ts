import { Component } from '@angular/core';
import { PaginatorComponent } from './paginator.component';

// This extended class of PaginatorComponent will set the
// label of the Paginator when pageChanged is called.
// However, this is only used due to a limitation with Storybook whereby props
// cannot be changed from inside the emitted event handler.
// The pageChange event should be used instead.
@Component({
  selector: 'ukho-paginator-wrapper-with-label',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorWrapperWithLabelComponent extends PaginatorComponent {
  pageChanged(page: number) {
    const perPage = 6;
    const first = page == 1 ? 1 : perPage * (page - 1);
    const last = page == 8 ? 45 : perPage * page;
    const total = 45;
    const label = `Showing ${first}-${last} of ${total}`;
    console.log('setLabel super');
    super.setLabel(label);

    console.log('pageChanged super');
    super.pageChanged(page);

    this.currentPage = page;
  }
}

// This extended class of PaginatorComponent will set the
// label of the Paginator when pageChanged is called.
// However, this is only used due to a limitation with Storybook whereby props
// cannot be changed from inside the emitted event handler.
// The pageChange event should be used instead.
@Component({
  selector: 'ukho-paginator-wrapper-without-label',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorWrapperWithoutLabelComponent extends PaginatorComponent {
  pageChanged(page: number) {
    super.pageChanged(page);

    this.currentPage = page;
  }
}
