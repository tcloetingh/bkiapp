import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Cocktail } from '../models/cocktail';
import { CocktailSerivceService } from '../service/cocktail-serivce.service';

@Component({
  selector: 'app-cocktails-main',
  templateUrl: './cocktails-main.component.html',
  styleUrls: ['./cocktails-main.component.css'],
})
export class CocktailsMainComponent {
  openModalSignal = '';

  cocktailForm = this.fb.group({
    name: ['', Validators.required],
    ingredients: ['', Validators.required],
    // baseSpirit: [1, Validators.required],
    preparation: ['', Validators.required],
    garnish: '',
    glassware: '',
    origin: '',
    bartender: '',
    notes: '',
  });

  searchForm = this.fb.group({
    searchTerm: ['', Validators.required],
  });

  isSubmitted = false;
  hasResult: boolean = true;

  spirits = [
    { id: 1, spirit: 'Whiskey' },
    { id: 2, spirit: 'Gin' },
    { id: 3, spriit: 'Tequila' },
    { id: 4, spirit: 'Mezcal' },
    { id: 5, spirit: 'Rum' },
  ];
  public totalCount: number;
  public searchCount: number;
  public page: number;
  public cocktails: Cocktail[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cs: CocktailSerivceService
  ) {}

  ngOnInit(): void {
    console.log('called');
    this.cs.getCocktailCount().subscribe((count) => {
      this.totalCount = count;
      //this.searchCount = count;
    });

    this.cs.getCocktails().subscribe((cocktail) => (this.cocktails = cocktail));
  }

  onFormSubmit(): void {
    console.log(this.cocktailForm.value);
    this.cs.postNewCocktial(this.cocktailForm).subscribe(
      (response) => console.log('technically a success ' + response.message),
      (error) => console.log('we got an error here ' + error.message),
      () => console.log('observable ended')
    );
    this.cocktailForm.reset();
  }

  onSearchSubmit(): void {
    console.log(this.searchForm.value);
    this.cs.searchCocktails(this.searchForm).subscribe(
      (response) => {
        this.cocktails = response;
        this.searchCount = response.length;

        if (this.cocktails.length == 0) {
          this.hasResult = false;
        } else {
          this.hasResult = true;
        }
      },
      (error) => console.log('we got an error here ' + error.message),
      () => console.log('observable ended')
    );
  }

  sendModalOpenEvent() {
    console.log('button clicked');
    this.openModalSignal = 'sending open signal';
  }
}
