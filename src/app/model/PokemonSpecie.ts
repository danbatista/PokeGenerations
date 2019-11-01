import { ArrayType } from '@angular/compiler'
import { ArrayDataSource } from '@angular/cdk/collections';
import { Names } from './Names';
import { FlavorText } from './FlavorText';
import { Genus } from './Genus';
export class PokemonSpecie {

    id: number;
    name: String
    order: number;
    genderRate: number;
    captureRate: number;
    baseHappiness: number;
    isBaby: boolean;
    hatchCounter: number;
    hasGenderDifferences: boolean;
    formsSwitchable: boolean;
    growthRate: ArrayType;
    pokedexnumbers: ArrayType;
    eggGroups: ArrayType;
    color: ArrayType;
    shape: ArrayType;
    evolvesFromSpecies: ArrayType;
    evolutionChain: ArrayType;
    habitat: ArrayType;
    generation: ArrayType;
    names: Array<Names>;
    palParkEncounters: ArrayType;
    flavor_text_entries: Array<FlavorText>;
    formDescription: ArrayType;
    genera: Array<Genus>;
    varieties: ArrayType;
}
