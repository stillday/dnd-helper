import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {

  spells: Spell[];
  
  constructor(private spellService: SpellService,) { }
  
  ngOnInit(): void {
    this.getSpells();
  }

  getSpells(): void {
    this.spellService.getSpells()
        .subscribe(spells => this.spells = spells);
  }

  delete(spell: Spell): void {
    this.spells = this.spells.filter(h => h !== spell);
    this.spellService.deleteSpell(spell).subscribe();
  }
}
