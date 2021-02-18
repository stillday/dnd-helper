import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { InputSpellsComponent } from './input-spells/input-spells.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { SpellComponent } from './spell/spell.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSpellsComponent,
    SpellDetailComponent,
    SpellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
