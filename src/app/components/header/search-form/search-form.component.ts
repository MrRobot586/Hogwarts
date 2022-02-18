import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { HpApiServiceService } from 'src/app/services/hp-api-service.service';

@Component({
  selector: 'app-search-form',
  template: `
    <form class="d-flex">
      <input class="form-control" type="search" name="search" placeholder="Search by name..." aria-label="Search" [(ngModel)]="api.search_input">
    </form>
  `,
})
export class SearchFormComponent implements OnInit {

  // Font awesome icon
  public faSearch = faSearch;

  constructor(public api:HpApiServiceService) { }

  ngOnInit(): void { }
}
