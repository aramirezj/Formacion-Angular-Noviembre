import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pocoStock'
})
export class PocoStockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string | number {
    if(value < 5){
        return value + ' (Queda poco stock, ¡Compralo ya!)';
    }else{
        return value;
    }
  }

}
