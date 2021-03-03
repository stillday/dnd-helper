import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../spell';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpellService } from '../spell.service';
@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {
  
 spell: Spell;

  constructor(
    private route: ActivatedRoute,
    private spellService: SpellService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSpell();
  }

  getSpell(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.spellService.getSpell(id)
      .subscribe(spell => this.spell = spell);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.spellService.updateSpell(this.spell)
      .subscribe(() => this.goBack());
  }

}
