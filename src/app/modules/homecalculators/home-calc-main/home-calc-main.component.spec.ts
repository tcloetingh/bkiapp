import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCalcMainComponent } from './home-calc-main.component';

describe('HomeCalcMainComponent', () => {
  let component: HomeCalcMainComponent;
  let fixture: ComponentFixture<HomeCalcMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCalcMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCalcMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
