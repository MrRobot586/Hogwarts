import { Component, OnInit } from '@angular/core';
import { faGithub, faAngular  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Font awesome icons
  public faGithub = faGithub;
  public faAngular = faAngular;

  constructor() { }

  ngOnInit(): void {
  }

}
