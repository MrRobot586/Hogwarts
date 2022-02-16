import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'Age'
})
export class AgePipe implements PipeTransform {

    transform(value: number): string {
        let year = moment().year();
        return ((year - value) + ' years old');
    }

}