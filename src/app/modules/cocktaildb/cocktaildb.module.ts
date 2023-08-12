import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsMainComponent } from './cocktails-main/cocktails-main.component';
import { NewCocktailModalComponent } from './new-cocktail-modal/new-cocktail-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CocktailsMainComponent,
    NewCocktailModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [NewCocktailModalComponent]
})
export class CocktaildbModule { }
