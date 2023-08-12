import { TestBed } from '@angular/core/testing';

import { CocktailSerivceService } from './cocktail-serivce.service';

describe('CocktailSerivceService', () => {
  let service: CocktailSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
