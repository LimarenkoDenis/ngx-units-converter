const metric = {
  C: {
    name: {
      singular: 'degree Celsius'
      , plural: 'degrees Celsius'
    }
    , to_anchor: 1
    , anchor_shift: 0
  },
  K: {
    name: {
      singular: 'degree Kelvin'
      , plural: 'degrees Kelvin'
    }
    , to_anchor: 1
    , anchor_shift: 273.15
  }
};

const imperial = {
  F: {
    name: {
      singular: 'degree Fahrenheit'
      , plural: 'degrees Fahrenheit'
    }
    , to_anchor: 1
  },
  R: {
    name: {
      singular: 'degree Rankine'
      , plural: 'degrees Rankine'
    }
    , to_anchor: 1
    , anchor_shift: 459.67
  }
};

export const temperature = {
  metric
  , imperial
  , _anchors: {
    metric: {
      unit: 'C'
      , transform: function (C) { return C / (5 / 9) + 32 }
    }
    , imperial: {
      unit: 'F'
      , transform: function (F) { return (F - 32) * (5 / 9) }
    }
  }
};
