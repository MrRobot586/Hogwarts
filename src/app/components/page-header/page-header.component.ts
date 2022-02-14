import { Component, OnInit } from '@angular/core';

import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  faHatWizard = faHatWizard;

  constructor() { }

  ngOnInit(): void {
  }

}
