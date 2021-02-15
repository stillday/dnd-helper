import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../hero';
import { Spell } from '../spell';
import { SPELLS } from '../spell-list';

@Component({
  selector: 'app-input-spells',
  templateUrl: './input-spells.component.html',
  styleUrls: ['./input-spells.component.css']
})
export class InputSpellsComponent implements OnInit {

  spells = SPELLS;

  // click event spell
  selectedSpell?: Spell;
  onSelect(spell: Spell): void {
    this.selectedSpell = spell;
  }

  constructor() { }

  ngOnInit(): void {
  }

  hero: Hero = {
    id: 1,
    name: 'windstorm'
  }

  spell: Spell = {
    name: 'Ebenwechsel',
    class: 'Magier',
    grad: 7,
    // time: '1 Aktion',
    // range: 'Berührung',
    // components: 'V, G, M (ein gegabelter Metallstab im Wert von Mindestens 250gm, eingestimmt auf die gewünschte Existenzebene)',
    // duration: 'unmittelbar',
    // damage: '...',
    // rescue: '...',
    // page: 223
  }
}
