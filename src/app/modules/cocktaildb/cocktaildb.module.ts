import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsMainComponent } from './cocktails-main/cocktails-main.component';
import { NewCocktailModalComponent } from './new-cocktail-modal/new-cocktail-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CocktailsMainComponent,
    NewCocktailModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [NewCocktailModalComponent]
})
export class CocktaildbModule { }
