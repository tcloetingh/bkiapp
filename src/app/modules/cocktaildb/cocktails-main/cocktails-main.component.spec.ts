import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsMainComponent } from './cocktails-main.component';

describe('CocktailsMainComponent', () => {
  let component: CocktailsMainComponent;
  let fixture: ComponentFixture<CocktailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
