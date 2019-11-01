
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map as MAP, tap } from 'rxjs/operators';
import { Generation } from '../model/Generation';
import { Pokemon } from '../model/Pokemon';
import { RootObject } from '../model/RootObject';
import { PokemonSpecie } from '../model/PokemonSpecie';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  private GetGenerationURL1 = "https://pokeapi.co/api/v2/generation/1";
  private GetGenerationURL2 = "https://pokeapi.co/api/v2/generation/2";
  private urlSprites = "https://pokeapi.co/api/v2/pokemon/";
  httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };


  constructor(private http: HttpClient) { }

  getGeneration1(): Observable<Generation> {
    return this.http.get<Generation>(this.GetGenerationURL1)
      .pipe(
        tap(_ => console.log('fetched generations')),
        catchError(this.handleError<Generation>('getGeneration1'))
      );
    // Subscribe to begin listening for async result
  }

  getGeneration2(): Observable<Generation> {
    return this.http.get<Generation>(this.GetGenerationURL2)
    .pipe(
      tap(_ => console.log('fetched generations')),
      catchError(this.handleError<Generation>('getGeneration2'))
    );
  }

  getPokemon_Species(url: string): Observable<PokemonSpecie> {
    return this.http.get<PokemonSpecie>(url)
      .pipe(
        tap(_ => console.log('fetched Species')),
        catchError(this.handleError<PokemonSpecie>('getPokemon_Species'))
      );
  }


  getPokemon_Species2(url: string): Observable<PokemonSpecie> {
    return this.http.get<PokemonSpecie>(url)
      .pipe(
        tap(_ => console.log('fetched Species')),
        catchError(this.handleError<PokemonSpecie>('getPokemon_Species'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}