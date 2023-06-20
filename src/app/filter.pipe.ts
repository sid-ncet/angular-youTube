import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    console.log(value)
    console.log(filterString)
   
    if (filterString === undefined) {
      return value
    }
    
    else {
      const resultArray = [];
      for (const item of value) {
        filterString = filterString.toLowerCase();
        if (item.title.toLowerCase().indexOf(filterString) >= 0) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
  }

}
