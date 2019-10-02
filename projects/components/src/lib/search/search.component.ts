import { Component } from '@angular/core';

@Component({
  selector: 'ukho-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  handleSearch() {
    console.log('search button has been clicked');
  }
}
