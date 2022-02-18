import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class HpApiServiceService {

  public search_input:string;
  public sortBy:string;

  constructor(private http:HttpClient) { this.search_input = ''; this.sortBy = '' }

  parseQuery(ref = ''){
    if(ref == 'students' || ref == 'staff' || ref == 'all'){
      if(ref == 'all'){
        return '';
      }else{
        return `/${ref}`;
      }
    }else{
      if(ref == ''){
        return ref;
      }else{
        return `/house/${ref}`;
      }
    }
  }
  
  getApiData(query = ''){
    return this.http.get<Character[]>(environment.BaseApiUrl + query);
  }
}
