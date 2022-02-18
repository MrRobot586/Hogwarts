import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(characters:Character[], arg:string = ''):Character[]{

    function SortArray(x:Character, y:Character){
      return x.name.localeCompare(y.name, 'fr', {ignorePunctuation: true});
    }

    let res:Character[] = [];

    if(!arg || arg == ''){
      res = characters;
    }else{
      if(arg == 'az'){
        res = characters.sort(SortArray)
      }else if(arg == 'za'){
        res = characters.sort(SortArray);
        res = res.reverse();
      }
    }

    return res;
  }
}
