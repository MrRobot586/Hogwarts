import { Component, OnInit } from '@angular/core';

import { faSearch, faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

import { HpApiServiceService } from 'src/app/services/hp-api-service.service';

@Component({
  selector: 'app-search-form',
  template: `
    <form class="d-flex">
      <input class="form-control" type="search" name="search" placeholder="Search by name..." aria-label="Search" [(ngModel)]="api.search_input">
      <div class="btn-group ms-2" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" (click)="sort('az')"><fa-icon [icon]="faSortAlphaDown"></fa-icon></button>
        <button type="button" class="btn btn-primary" (click)="sort('za')"><fa-icon [icon]="faSortAlphaUp"></fa-icon></button>
      </div>
    </form>
  `,
})
export class SearchFormComponent implements OnInit {

  // Font awesome icon
  public faSearch = faSearch;
  public faSortAlphaDown = faSortAlphaDown;
  public faSortAlphaUp = faSortAlphaUp;

  constructor(public api:HpApiServiceService) { }

  ngOnInit(): void { }

  sort(type:string = ''){
    this.api.sortBy = type;
  }
}
