import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { InputSpellsComponent } from './input-spells/input-spells.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSpellsComponent,
    SpellDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
