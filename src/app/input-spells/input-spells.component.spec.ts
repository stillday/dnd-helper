import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSpellsComponent } from './input-spells.component';

describe('InputSpellsComponent', () => {
  let component: InputSpellsComponent;
  let fixture: ComponentFixture<InputSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSpellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
