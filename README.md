# NgxUnitsConverter
Angular module wrapper inspired by <a href="https://github.com/ben-ng/convert-units">convert-units</a>

##
<a href="https://stackblitz.com/edit/angular-lfeuen">Pls try - Demo</a>


### Installing
`npm install --save ngx-units-converter`

### Usage

```
import {UnitsConvererModule} from 'ngx-units-converter'

(...)

@NgModule({
  (...)
  imports: [
    UnitsConvererModule
  ]
  (...)
})

```

### Pipe
```
 Params
  - from: string, 
  - to: string, 
  Optionals
  - round: number
  
  <p> {{ 20 | unitsConverter: { from: 'mm', to: 'in', round: 3 } }}</p>
```

### Service

### List of avialable measures (length, mass...)
```
export class YourClass {
  public constructor(private _unitsConverorService: UnitsConverorService) {
    this._unitsConverorService.measures() 
  }
}
```

### Get description by unit name
```
{
    unitname: string;
    measure: string;
    system: string;
    definition: {
      name: {
        singular: 'Millimeter',
        plural: 'Millimeters'
      },
      to_anchor: 1 / 1000
    };
}
```

```
export class YourClass {
  public constructor(private _unitsConverorService: UnitsConverorService) {
    this._unitsConverorService.describe('mm') 
  }
}

```
