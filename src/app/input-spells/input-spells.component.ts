import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-spells',
  templateUrl: './input-spells.component.html',
  styleUrls: ['./input-spells.component.css']
})
export class InputSpellsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hero = 'windstorm';
}
