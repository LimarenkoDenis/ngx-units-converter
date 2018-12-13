import { UnitsConverorService } from './units-converter.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitsConverter'
})
export class UnitsConverterPipe implements PipeTransform {
  public constructor(private _unitsConverorService: UnitsConverorService) {
  }

  public transform(value: any, args?: { from: string, to: string, round?: number }): any {
    try {
      return this._unitsConverorService.init(value).from(args.from).to(args.to).round(args.round);
    } catch (err) {
      console.warn(err);
      return '';
    }
  }
}
