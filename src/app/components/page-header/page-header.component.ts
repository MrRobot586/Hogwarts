import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { faHatWizard, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  faHatWizard = faHatWizard;
  faGraduationCap = faGraduationCap;

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
      house_selector: false,
      new_studet_apply: false
    };

    switch (category) {
      case 'staff':
        composition.title_sufix = ' teachers';

        composition.sub_title = 'The most qualified staff';
        break;
        
      case 'students':
        composition.title_sufix = ' students';
        composition.sub_title = 'Our most outstanding students';
        composition.new_studet_apply = true;
        break;

      case 'all':
      case 'Gryffindor':
      case 'Slytherin':
      case 'Ravenclaw':
      case 'Hufflepuff':
        composition.title_sufix = ' characters';
        composition.sub_title = 'List all the characters of the Harry Potter book series';
        composition.house_selector = true;
        break;
    
      default:
        composition.title_prefix = 'Welcome to ';
        composition.sub_title = 'Witchcraft and sorcery school';
        break;
    }

    return composition;
  }

}
