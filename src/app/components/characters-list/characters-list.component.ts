import { Component, OnInit } from '@angular/core';

import { faHatWizard,faHouseDamage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  faHatWizard = faHatWizard;
  faHouse = faHouseDamage;

  public characters = [
    { name: 'Harry Potter', species: 'Human', gender: 'Male', age: '20', patronus: 'Stag', house: 'Gryffindor', img: 'http://hp-api.herokuapp.com/images/harry.jpg' },
    { name: 'Draco Malfoy', species: 'Human', gender: 'Male', age: '20', patronus: 'Unknow', house: 'Slytherin', img: 'http://hp-api.herokuapp.com/images/draco.jpg' },
    { name: 'Cho Chang', species: 'Human', gender: 'Famale', age: '20', patronus: 'Swan', house: 'Ravenclaw', img: 'http://hp-api.herokuapp.com/images/cho.jpg' },
    { name: 'Cedric Diggory', species: 'Human', gender: 'Male', age: '20', patronus: 'Unknow', house: 'Hufflepuff', img: 'http://hp-api.herokuapp.com/images/cedric.png' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
