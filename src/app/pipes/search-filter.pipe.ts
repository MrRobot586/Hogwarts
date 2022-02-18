import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character.interface';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(characters:Character[], search: string = ''):Character[]{
    if(!search || search == ''){
      return characters;
    }else{
      let res:Character[] = [];
      search = search.toLowerCase();
      characters.forEach(character =>{
        if(character.name.toLowerCase().indexOf(search) != -1){
          res.push(character);
        }
      });
      return res;
    }
  }

}
