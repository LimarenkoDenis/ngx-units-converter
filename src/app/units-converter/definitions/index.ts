import { volumeFlowRate } from './volumeFlowRate';
import { volume } from './volume';
import { voltage } from './voltage';
import { time } from './time';
import { temperature } from './temperature';
import { speed } from './speed';
import { reactivePower } from './reactivePower';
import { reactiveEnergy } from './reactiveEnergy';
import { pressure } from './pressure';
import { power } from './power';
import { partsPer } from './partsPer';
import { pace } from './pace';
import { mass } from './mass';
import { length } from './length';
import { illuminance } from './illuminance';
import { frequency } from './frequency';
import { energy } from './energy';
import { digital } from './digital';
import { current } from './current';
import { IMeasure } from '../interfaces';
import { acceleration } from './acceleration';
import { angle } from './angle';
import { apparentPower } from './apparentPower';
import { area } from './area';
import { charge } from './charge';
import { each } from './each';

export const measures: { [system: string]: IMeasure } = {
  acceleration,
  angle,
  apparentPower,
  area,
  charge,
  current,
  digital,
  each,
  energy,
  frequency,
  illuminance,
  length,
  mass,
  pace,
  partsPer,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate,
};
