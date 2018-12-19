import { IMeasure } from './units-converter/interfaces';
import { UnitsConverorService } from './units-converter/units-converter.service';
import { Component, OnInit } from '@angular/core';
import { measures } from './units-converter/definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public data: any;

  constructor(private unitConverter: UnitsConverorService) {
  }

  ngOnInit() {


    const measuresKeys = Object.keys(measures).reduce((acc: string[], next: string) => {
      const measure: IMeasure = measures[next];
      const measuresNames: string[] = [];


      // tslint:disable-next-line:forin
      for (const key in measure) {
        if (key === '_anchors') {
          continue;
        }
        const values: string[] = Object.keys(measure[key]);
        measuresNames.push(...values);
      }

      return [...acc, measuresNames];
    }, []);

    const data = measuresKeys.reduce((acc: any, next: string[]) => {
      const item: any = [];

      for (let i = 0; i < next.length; i++) {
        for (let j = 0; j < next.length; j++) {
          const initValue: number = Math.random() * 100;
          item.push({
            from: next[i],
            to: next[j],
            value: initValue,
            valueTo: this.unitConverter.init(initValue).from(next[i]).to(next[j]).round(3)
          });
        }
      }
      return [...acc, ...item];
    }, []);

    this.data = data;
  }
}
