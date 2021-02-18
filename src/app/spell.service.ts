import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { SPELLS } from './spell-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor() { }

  getSpells(): Observable<Spell[]> {
    const spells = of(SPELLS);
    return spells;
  }
}
