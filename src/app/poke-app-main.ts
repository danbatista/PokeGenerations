import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenerationService } from './services/GenerationService';
import { Generation } from './model/Generation';
import { PokemonSpecie } from './model/PokemonSpecie';

export interface PokeTab {
  label: string;
  content: string;
}

/**
 * @title Basic use of the tab group
 */


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'poke-app-main',
  templateUrl: 'poke-app-main.html',
  styleUrls: ['poke-app-main.css'],
})
export class PokeApp implements OnInit {

  gen1: Generation;
  gen2: Generation;

  NameJP = new Array();
  Genus = new Array();
  Flavor = new Array();
  _ids = new Array();
 

  NameJP2 = new Array();
  Genus2 = new Array();
  Flavor2 = new Array();
  _ids2 = new Array();


  typeG1A = new Array();
  typeG1B = new Array();

  typeG2A = new Array();
  typeG2B = new Array();

  constructor(private gService: GenerationService) {

    this.getGeneration1();
    this.getGeneration2();

  }

  async ngOnInit() {

  }


  getGeneration1(): void {
   
    this.gService.getGeneration1().subscribe(response => {
      this.gen1 = response;
      for (let i in this.gen1.pokemon_species) {
        if (i<= '7'){
          this.getPokemonSpecies(this.gen1.pokemon_species[i].url);
        }
      }
    });

  }

  getGeneration2(): void {
    
    this.gService.getGeneration2().subscribe(response => {
      this.gen2 = response;
      for (let i in this.gen2.pokemon_species) {
        if (i <= '7')
          this.getPokemonSpecies2(this.gen2.pokemon_species[i].url);
      }
    });
  }

  getPokemonSpecies(url: string): void {
    this.gService.getPokemon_Species(url).subscribe(response => {
      this.NameJP.push(response.names[0].name.toString());
      this.Flavor.push(response.flavor_text_entries[2].flavor_text.toString());
      this.Genus.push(response.genera[2].genus);
      this._ids.push(response.id);
   
    });
  }
  getPokemonSpecies2(url: string): void {
    this.gService.getPokemon_Species2(url).subscribe(response => {
      this.NameJP2.push(response.names[0].name.toString());
      this.Flavor2.push(response.flavor_text_entries[2].flavor_text.toString());
      this.Genus2.push(response.genera[2].genus);
      this._ids2.push(response.id);
     
    });
  }




}