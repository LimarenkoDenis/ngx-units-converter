import { unit } from './index';
import { charge } from './definitions/charge';
import { apparentPower } from './definitions/apparentPower';
import { angle } from './definitions/angle';
import { acceleration } from './definitions/acceleration';
import { Injectable } from '@angular/core';
import { each } from 'lodash';
import { pressure } from './definitions/pressure';
import { length } from './definitions/length';
import { area } from './definitions/area';
import { mass } from './definitions/mass';
import { IMeasure, IFoundUnit, IUnitDefinition, IUnitSystem, IDefinition } from './interfaces';

const measures: { [system: string]: IMeasure } = {
  pressure,
  length,
  area,
  mass,
  acceleration,
  angle,
  apparentPower,
  charge,
};

@Injectable()
export class UnitsConverorService {
  private valueToConvert: number;
  private origin: IFoundUnit;
  private destination: IFoundUnit;
  private result: number;

  public init(valueToConvert: number): UnitsConverorService {
    this.valueToConvert = valueToConvert;
    return this;
  }

  public getUnit(unitname: string): IFoundUnit | null {
    let found: IFoundUnit;

    each(measures, (systems: IMeasure, measure: string) => {
      each(systems, (units: IUnitDefinition | IMeasure['_anchors'], system: string) => {
        if (system === '_anchors') {
          return false;
        }

        each(units, (definition: IDefinition, _unitname: string) => {
          if (_unitname === unitname) {
            found = {
              unitname, measure, system, definition
            };
            return false;
          }
        });

        if (found) {
          return false;
        }
      });

      if (found) {
        return false;
      }
    });

    return found;
  }

  public from(unitFromConvert: unit | string): UnitsConverorService {
    if (this.destination) {
      this.throwError('.from must be called before .to');
    }

    this.origin = this.getUnit(unitFromConvert);

    if (!this.origin) {
      this.throwError(`Unsupported from unit ${unitFromConvert}`);
    }

    return this;
  }

  public to(to: string): UnitsConverorService {
    if (!this.origin) {
      this.throwError('.to must be called after .from');
    }

    this.destination = this.getUnit(to);

    this._validate();
    this._calculate();

    return this;
  }

  public measures(): string[] {
    return Object.keys(measures);
  }

  public round(value: number = 2): number {
    this.origin = null;
    this.destination = null;

    return +Number(this.result).toFixed(value);
  }

  public describe(abbr: string): IFoundUnit {
    return this.getUnit(abbr);
  }

  private _validate(): never | number {
    if (!this.destination) {
      this.throwError('Can nott find destination unit');
    }

    if (this.origin.unitname === this.destination.unitname) {
      return this.valueToConvert;
    }

    if (this.destination.measure !== this.origin.measure) {
      this.throwError(`Cannot convert incompatible measures of ${this.destination.measure} and ${this.origin.measure}`);
    }
  }

  private _calculate(): UnitsConverorService {
    let result: number;
    let transform: IUnitSystem['transform'];

    result = this.valueToConvert * this.origin.definition.to_anchor;

    /**
     * For some changes it's a simple shift (C to K)
     * So we'll add it when convering into the unit (later)
     * and subtract it when converting from the unit
    */
    if (this.origin.definition.anchor_shift) {
      result -= this.origin.definition.anchor_shift;
    }

    if (this.origin.system !== this.destination.system) {
      transform = measures[this.origin.measure]._anchors[this.origin.system].transform;
      if (typeof transform === 'function') {
        result = transform(result);
      } else {
        result *= measures[this.origin.measure]._anchors[this.origin.system].ratio;
      }
    }


    /**
    * This shift has to be done after the system conversion business
    */
    if (this.destination.definition.anchor_shift) {
      result += this.destination.definition.anchor_shift;
    }

    /**
    * Convert to another unit inside the destination system
    */

    this.result = result / this.destination.definition.to_anchor;
    return this;
  }

  private throwError(error: string): void | never {
    throw new Error(error);
  }
}
