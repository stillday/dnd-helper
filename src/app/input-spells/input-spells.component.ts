import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../hero';
import { Spells } from '../spells';

@Component({
  selector: 'app-input-spells',
  templateUrl: './input-spells.component.html',
  styleUrls: ['./input-spells.component.css']
})
export class InputSpellsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hero: Hero = {
    id: 1,
    name: 'windstorm'
  }

  spell: Spells = {
    name: 'Ebenwechsel',
    grad: 7,
    time: '1 Aktion',
    range: 'Berührung',
    components: 'V, G, M (ein gegabelter Metallstab im Wert von Mindestens 250gm, eingestimmt auf die gewünschte Existenzebene)',
    duration: 'unmittelbar',
    damage: '...',
    rescue: '...',
    page: 223
  }
}
