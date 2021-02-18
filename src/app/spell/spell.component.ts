import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Spell } from '../spell';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {
  
  constructor(private spellService: SpellService) { }

  ngOnInit(): void {
    this.getSpells();
  }

  getSpells(): void {
    this.spellService.getSpells()
        .subscribe(spells => this.spells = spells);
  }

  spells: Spell[];

  // click event spell
  selectedSpell?: Spell;
  onSelect(spell: Spell): void {
    this.selectedSpell = spell;
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
