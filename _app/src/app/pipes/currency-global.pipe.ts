import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyGlobal'
})
export class CurrencyGlobalPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits?: string): string {
    if (!value) {
      return '';
    }

    let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-PT');
    let newValue: string = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);

    return newValue;
  }


}
