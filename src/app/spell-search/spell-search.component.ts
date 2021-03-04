import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Spell } from '../spell';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-spell-search',
  templateUrl: './spell-search.component.html',
  styleUrls: ['./spell-search.component.css']
})
export class SpellSearchComponent implements OnInit {
  spells$: Observable<Spell[]>;
  private searchTerms = new Subject<string>();

  constructor(private SpellService: SpellService) {}

  // Push a seaarch term into the obersable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.spells$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.SpellService.searchSpell(term))
    )
  }

}
