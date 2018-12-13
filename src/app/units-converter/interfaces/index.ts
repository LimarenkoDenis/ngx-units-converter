export interface IDefinition {
    name: { singular: string; plural: string; };
    to_anchor: number;
    anchor_shift?: number;
}

export interface IUnitDefinition {
    [unitname: string]: IDefinition;
}

export interface IUnitSystem {
    unit: string;
    ratio: number;
    transform?: (unit: number) => number;
}

export interface IMeasure {
    metric: IUnitDefinition;
    imperial: IUnitDefinition;
    _anchors: { [system: string]: IUnitSystem };
}

export interface IFoundUnit {
    unitname: string;
    measure: string;
    system: string;
    definition: IDefinition;
}
