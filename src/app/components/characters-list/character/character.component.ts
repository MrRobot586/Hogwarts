import { Component, OnInit, Input } from '@angular/core';

import { faHatWizard,faHouseDamage } from '@fortawesome/free-solid-svg-icons';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  // Input character
  @Input() character!:Character;

  // Font awesome icons
  public faHatWizard = faHatWizard;
  public faHouse = faHouseDamage; 

  constructor() { }

  ngOnInit(): void {
  }

}
