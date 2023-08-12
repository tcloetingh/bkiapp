import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingzoneComponent } from './landingzone.component';

describe('LandingzoneComponent', () => {
  let component: LandingzoneComponent;
  let fixture: ComponentFixture<LandingzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingzoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
