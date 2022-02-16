import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';


import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  faHatWizard = faHatWizard;
  ruta:string;
  parm:string;

  constructor(
    private route:ActivatedRoute,
    private router: Router
  ) {
    this.ruta = '';
    this.parm = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.ruta = params['ruta'];
      this.parm = params['house'];
    });
  }

}
