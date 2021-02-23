import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  spells: Spell[] = [];
  constructor(private spellService: SpellService) { }

  ngOnInit() {
    this.getSpells();
  }

  getSpells(): void {
    this.spellService.getSpells()
      .subscribe(spells => this.spells = spells.slice(1,5 ))
  }

}
