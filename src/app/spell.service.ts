import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { SPELLS } from './spell-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.spellsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Spell[]>('getSpells', []))
      )
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSpell(id: number): Observable<Spell> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(SPELLS.find(spell => spell.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SpellService: ${message}`);
  }

  private spellsUrl = 'api/spells'; // URL to web api
}
