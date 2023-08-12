import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCalcMainComponent } from './modules/homecalculators/home-calc-main/home-calc-main.component';
import { ResumeMainComponent } from './modules/resume/resume-main/resume-main.component';
import { CocktailsMainComponent } from './modules/cocktaildb/cocktails-main/cocktails-main.component';
import { LandingzoneComponent } from './modules/homepage/landingzone/landingzone.component';

const routes: Routes = [
  { path: 'home-calculators', component: HomeCalcMainComponent },
  { path: 'cocktail-database', component: CocktailsMainComponent },
  { path: 'resume', component: ResumeMainComponent },
  { path: '', component: LandingzoneComponent }, 
  { path: '**', component: LandingzoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
