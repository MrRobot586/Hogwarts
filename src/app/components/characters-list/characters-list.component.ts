import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { Character } from 'src/app/models/character.interface';
import { HpApiServiceService } from 'src/app/services/hp-api-service.service';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  // Font awesome icon
  public faArrowUp = faArrowUp;

  public query!:string;
  public characters:Character[];
  public GoUpbtn:boolean;
  
  constructor(
    public api:HpApiServiceService,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document:Document
  ) {
    this.characters = [];
    this.GoUpbtn = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.query = params['parm'] || '';
      this.query = this.api.parseQuery(this.query);
      this.api.getApiData(this.query).subscribe(data=>{
        this.characters = data;
        this.api.loading = false;
      });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const yOffSet = window.pageYOffset;
    if((yOffSet || this.document.documentElement.scrollTo || this.document.body.scrollTo) > 2000){
      this.GoUpbtn = true;
    }else if(this.GoUpbtn && (yOffSet || this.document.documentElement.scrollTo || this.document.body.scrollTo) < 200){
      this.GoUpbtn = false;
    }
  }
  
  scrollTop():void{
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
