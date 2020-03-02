import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelsToString'
})
export class LabelsToStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(typeof value === 'boolean')
      value = (value) ? 1 : 0;

    let labels = args[0];
    let index = (value) ? value : 0;
    return labels[index];
  }

}
