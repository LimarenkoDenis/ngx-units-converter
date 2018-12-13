import { UnitsConverorService } from './units-converter/units-converter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private unitConverter: UnitsConverorService) {
    this.unitConverter.init(1).from('mm').to('in');
  }
}
