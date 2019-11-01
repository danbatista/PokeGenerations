import {Types } from './Types';

export class Pokemon{

    abilities: Array<string>;
    forms: Array<string>;
    game_indices:  Array<string>;
    height:  number;
    held_items:  Array<string>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves:  Array<string>;
    order: number;
    species:  Array<string>;
    stats:  Array<string>;
    types: Array<Types>;
    weight: number;
    sprites : {'front_default' : string};
    name : string;
    url : string;
}