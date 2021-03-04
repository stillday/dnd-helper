import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { SPELLS } from './spell-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ReturnStatement } from '@angular/compiler';

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
        tap(_ => this.log('fetched spells')),
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
    const url = `${this.spellsUrl}/${id}`;
    return this.http.get<Spell>(url).pipe(
      tap(_ => this.log(`fetched spell id=${id}`)),
      catchError(this.handleError<Spell>(`getSpell id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateSpell(spell: Spell): Observable<any> {
    return this.http.put(this.spellsUrl, spell, this.httpOptions).pipe(
      tap(_ => this.log(`updated spell id=${spell.id}`)),
      catchError(this.handleError<any>('updateSpell'))
    )
  }

  /** POST: add a new hero to the server */
  addSpell(spell: Spell): Observable<Spell> {
    return this.http.post<Spell>(this.spellsUrl, spell, this.httpOptions).pipe(
      tap((newSpell: Spell) => this.log(`added spell /w id=${newSpell.id}`)),
      catchError(this.handleError<Spell>('addSpell'))
    );
  }

  deleteSpell(spell: Spell | number): Observable<Spell> {
    const id = typeof spell === 'number' ? spell : spell.id;
    const url = `${this.spellsUrl}/${id}`;

    return this.http.delete<Spell>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted spell id=${id}`)),
      catchError(this.handleError<Spell>('deleteSpell'))
    );
  }

  /* GET Spell whose name contains search term */
  searchSpell(term: string): Observable<Spell[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Spell[]>(`${this.spellsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found spell matching "${term}"`) :
        this.log(`no spell matching "${term}"`),
      catchError(this.handleError<Spell[]>('searchSpell', []))
      )
    )
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SpellService: ${message}`);
  }

  private spellsUrl = 'api/spells'; // URL to web api
}
