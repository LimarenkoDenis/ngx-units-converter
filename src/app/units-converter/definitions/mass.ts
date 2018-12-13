import { IUnitDefinition, IMeasure } from '../interfaces';

const metric: IUnitDefinition = {
    mcg: {
        name: {
            singular: 'Microgram'
            , plural: 'Micrograms'
        }
        , to_anchor: 1 / 1000000
    },
    mg: {
        name: {
            singular: 'Milligram'
            , plural: 'Milligrams'
        }
        , to_anchor: 1 / 1000
    },
    g: {
        name: {
            singular: 'Gram'
            , plural: 'Grams'
        }
        , to_anchor: 1
    },
    kg: {
        name: {
            singular: 'Kilogram',
            plural: 'Kilograms'
        },
        to_anchor: 1000
    },
    mt: {
        name: {
            singular: 'Metric Tonne',
            plural: 'Metric Tonnes'
        },
        to_anchor: 1000000
    },
    kN: {
        name: {
            singular: 'Kilonewton'
            , plural: 'Kilonewtons'
        }
        , to_anchor: 101971.6
    }
};

const imperial: IUnitDefinition = {
    oz: {
        name: {
            singular: 'Ounce'
            , plural: 'Ounces'
        }
        , to_anchor: 1 / 16
    }
    , lb: {
        name: {
            singular: 'Pound'
            , plural: 'Pounds'
        }
        , to_anchor: 1
    }, t: {
        name: {
            singular: 'Ton',
            plural: 'Tons',
        },
        to_anchor: 2000,
    },
};

export const mass: IMeasure = {
    metric,
    imperial,
    _anchors: {
        metric: {
            unit: 'g',
            ratio: 1 / 453.592
        },
        imperial: {
            unit: 'lb',
            ratio: 453.592
        }
    }
};
