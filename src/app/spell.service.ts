import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { SPELLS } from './spell-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private messageService: MessageService) { }

  getSpells(): Observable<Spell[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('SpellService: fetched spells');
    return of(SPELLS);
  }

  getSpell(id: number): Observable<Spell> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(SPELLS.find(spell => spell.id === id));
  }
}
