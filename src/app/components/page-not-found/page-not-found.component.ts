import { Component, OnInit } from '@angular/core';
import { faHome, faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  public faHome = faHome;
  public faHeadset = faHeadset;

  constructor() { }

  ngOnInit(): void {
  }

}
