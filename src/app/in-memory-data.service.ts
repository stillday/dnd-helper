import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Spell } from './spell';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const spells = [
      {grad: 7, id: 1, name: 'Dunkelheit', class: 'Magier'},
      {grad: 6, id: 2, name: 'Dürre', class: 'Magier'},
      {grad: 5, id: 3, name: 'Dürre 2', class: 'Magier'},
      {grad: 4, id: 4, name: 'Dürre 3', class: 'Magier'},
      {grad: 3, id: 5, name: 'Dürre 4', class: 'Magier'},
      {grad: 2, id: 6, name: 'Dürre 5', class: 'Magier'},
      {grad: 1, id: 7, name: 'Dürre 6', class: 'Magier'},
      {grad: 2, id: 8, name: 'Dürre 7', class: 'Magier'},
      {grad: 3, id: 9, name: 'Dürre 8', class: 'Magier'},
      {grad: 4, id: 10, name: 'Dürre 9', class: 'Magier'},
      {grad: 5, id: 11, name: 'Dürre 10', class: 'Magier'}
    ];
    return {spells};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(spells: Spell[]): number {
    return spells.length > 0 ? Math.max(...spells.map(spell => spell.id)) + 1 : 1;
  }

}
