import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { faHatWizard, faGraduationCap, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  public faHatWizard = faHatWizard;
  public faGraduationCap = faGraduationCap;
  public faUsers = faUsers;
  
  public category!:string;

  constructor(private route:ActivatedRoute) {
    this.category = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.category = params['parm'];
    });
  }

  headerComposition(category = ''){
    let composition = {
      title_prefix: '',
      title_sufix: '',
      title: 'Hogwarts',
      sub_title: '',
      icon: faHatWizard,
      house_selector: false,
      new_studet_apply: false
    };

    switch (category) {
      case 'staff':
        composition.title_sufix = ' teachers';
        composition.sub_title = 'The most qualified staff';
        break;
        
      case 'students':
        composition.icon = faGraduationCap;
        composition.title_sufix = ' students';
        composition.sub_title = 'Our most outstanding students';
        composition.new_studet_apply = true;
        break;

      case 'all':
      case 'Gryffindor':
      case 'Slytherin':
      case 'Ravenclaw':
      case 'Hufflepuff':
        composition.icon = faUsers;
        composition.title_sufix = ' characters';
        composition.sub_title = 'List all the characters of the Harry Potter book series';
        composition.house_selector = true;
        break;
    }

    return composition;
  }

}
