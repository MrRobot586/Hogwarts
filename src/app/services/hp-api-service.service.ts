import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class HpApiServiceService {

  constructor(private http:HttpClient) { }

  getApiData(query = ''){
    return this.http.get<Character[]>(environment.Base_api_URL + query);
  }
}
