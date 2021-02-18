import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../spell';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {
  
  @Input() spell: Spell;

  constructor() { }

  ngOnInit(): void {
  }

}
