import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'puntos'})
export class PuntosPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === null || value === undefined) { return ''; }
    if (value.length < 5) { return value; }
    value = value.toUpperCase();
    return value.substr(0, 5) + '...';
  }

}
