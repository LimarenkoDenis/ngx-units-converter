import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsConverterPipe } from './units-converter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [UnitsConverterPipe],
  exports: [UnitsConverterPipe]
})
export class UnitsConvererModule { }
