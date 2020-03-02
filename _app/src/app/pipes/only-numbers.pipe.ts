import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyNumbers'
})
export class OnlyNumbersPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return (value !== null ) ? value.replace(/[^\d]+/g,'') : null ;
  }

}
