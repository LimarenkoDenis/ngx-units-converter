import { IUnitDefinition, IMeasure } from '../interfaces';

const metric: IUnitDefinition = {
  A: {
    name: {
      singular: 'Ampere'
    , plural: 'Amperes'
    }
  , to_anchor: 1
  }
, mA: {
    name: {
      singular: 'Milliampere'
      , plural: 'Milliamperes'
    }
    , to_anchor: .001
  }
, kA: {
    name: {
      singular: 'Kiloampere'
    , plural: 'Kiloamperes'
    }
  , to_anchor: 1000
  }
};

export const current: IMeasure = {
  metric,
  imperial: {},
  _anchors: {
    metric: {
      unit: 'A'
    , ratio: 1
    }
  }
};
