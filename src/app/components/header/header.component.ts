import { Component, OnInit } from '@angular/core';

import { faHatWizard, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Font awesome incons
  public faHatWizard = faHatWizard;
  public faSearch = faSearch;

  constructor() { };

  ngOnInit():void {  }
}
