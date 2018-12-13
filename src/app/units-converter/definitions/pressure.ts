
import { IUnitDefinition, IMeasure } from '../interfaces';

const metric: IUnitDefinition = {
    Pa: {
        name: {
            singular: 'pascal',
            plural: 'pascals'
        }, to_anchor: 1 / 1000
    }
    , kPa: {
        name: {
            singular: 'kilopascal'
            , plural: 'kilopascals'
        },
        to_anchor: 1
    }
    , MPa: {
        name: {
            singular: 'megapascal'
            , plural: 'megapascals'
        }
        , to_anchor: 1000
    },
    'N/mm2': {
        name: {
            singular: 'Newton per square millimetre'
            , plural: 'Newtons per square millimetre'
        }
        , to_anchor: 1000
    }
    , hPa: {
        name: {
            singular: 'hectopascal'
            , plural: 'hectopascals'
        }
        , to_anchor: 1 / 10
    }
    , bar: {
        name: {
            singular: 'bar'
            , plural: 'bar'
        }
        , to_anchor: 100
    }
    , torr: {
        name: {
            singular: 'torr'
            , plural: 'torr'
        }
        , to_anchor: 101325 / 760000
    }
};


const imperial: IUnitDefinition = {
    psi: {
        name: {
            singular: 'pound per square inch'
            , plural: 'pounds per square inch'
        }
        , to_anchor: 1 / 1000
    }
    , ksi: {
        name: {
            singular: 'kilopound per square inch'
            , plural: 'kilopound per square inch'
        }
        , to_anchor: 1
    }
};

export const pressure: IMeasure = {
    metric
    , imperial
    , _anchors: {
        metric: {
            unit: 'kPa'
            , ratio: 0.00014503768078
        }
        , imperial: {
            unit: 'psi'
            , ratio: 1 / 0.00014503768078
        }
    }
};
