import { ArrayType } from '@angular/compiler';
import {Pokemon} from './Pokemon';

export class Generation{
   abilities: ArrayType;
    name : string;
    id : number;
    main_region: ArrayType;
    moves: ArrayType;
    names: ArrayType;
    pokemon_species: Array<Pokemon>;
    types: ArrayType;
    version_groups: ArrayType;


}