import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../spell';
import { Location } from '@angular/common';
import { SpellService } from '../spell.service';


@Component({
  selector: 'app-input-spells',
  templateUrl: './input-spells.component.html',
  styleUrls: ['./input-spells.component.css']
})
export class InputSpellsComponent implements OnInit {

  spells: Spell[];
  spellCaster: string = "";

  constructor(
    private location: Location,
    private spellService: SpellService,
  ) { }

  ngOnInit(): void {
  }

  add (name: string, spellCaster: string): void {
    console.log(this.spellCaster);
    name= name.trim();
    if(!name) {return;}
    this.spellService.addSpell({ name, caster: this.spellCaster } as Spell)
      .subscribe(spell => {
        this.spells.push(spell);
      });
  }


  goBack(): void {
    this.location.back();
  }

}