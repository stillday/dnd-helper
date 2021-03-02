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
        catchError(this.handleError<Spell[]>('getSpells', []))
      )
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
