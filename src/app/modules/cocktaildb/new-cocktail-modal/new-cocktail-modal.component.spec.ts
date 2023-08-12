import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCocktailModalComponent } from './new-cocktail-modal.component';

describe('NewCocktailModalComponent', () => {
  let component: NewCocktailModalComponent;
  let fixture: ComponentFixture<NewCocktailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCocktailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCocktailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
