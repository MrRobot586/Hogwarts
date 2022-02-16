import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { HpApiServiceService } from 'src/app/services/hp-api-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  public query!:string;
  public characters!:Character[];
  
  constructor(private api:HpApiServiceService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.query = params['parm'] || '';
      this.query = this.api.parseQuery(this.query);
      this.api.getApiData(this.query).subscribe((data)=>{
        this.characters = data;
      });
    });
  }

}
