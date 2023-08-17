import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail';
import { CustomHttpRespone } from '../models/CustomHttpResponse';

@Injectable({
  providedIn: 'root'
})
export class CocktailSerivceService {
  readonly ROOT_URL = 'http://localhost:8080';
  count: Observable<number>;
  // cocktails: Observable<Cocktail[]>;

  constructor(private http: HttpClient) { }

  public getCocktailCount() {
    this.count = this.http.get<number>(this.ROOT_URL + "/count")
    return this.count; 
  }

  public getCocktails(page: number): Observable<Cocktail[]> {
    let myParams = new HttpParams().set('page', page);
    return this.http.get<Cocktail[]>(this.ROOT_URL + "/cocktails", {params: myParams});
  }

  public postNewCocktial(cocktailForm: FormGroup): Observable<CustomHttpRespone> {
    let formData: FormData = new FormData();
    formData.append('name', cocktailForm.value.name);
    formData.append('ingredients', cocktailForm.value.ingredients);
    formData.append('preparation', cocktailForm.value.preparation);
    formData.append('garnish', cocktailForm.value.garnish);
    formData.append('glassware', cocktailForm.value.glassware);
    formData.append('bartender', cocktailForm.value.bartender);
    formData.append('origin', cocktailForm.value.origin);
    formData.append('company', "N/A")


    return this.http.post<CustomHttpRespone>(this.ROOT_URL + "/new-cocktail", formData);
  }
}
