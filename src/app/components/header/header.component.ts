import { Component, OnInit } from '@angular/core';

import { faHatWizard, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  // Font awesome incons
  public faHatWizard = faHatWizard;

  constructor() { };

  ngOnInit():void {  }
}
