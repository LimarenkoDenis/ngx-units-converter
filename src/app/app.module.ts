import { UnitsConvererModule } from './units-converter/units.converter.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UnitsConvererModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
