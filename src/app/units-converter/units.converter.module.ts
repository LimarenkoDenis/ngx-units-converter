import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsConverorService } from './units-converter.service';
import { UnitsConverterPipe } from './units-converter.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UnitsConverterPipe],
  exports: [UnitsConverterPipe],
  providers: [
    UnitsConverorService
  ],
})
export class UnitsConvererModule { }
