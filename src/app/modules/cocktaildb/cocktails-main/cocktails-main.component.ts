import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-cocktails-main',
  templateUrl: './cocktails-main.component.html',
  styleUrls: ['./cocktails-main.component.css']
})
export class CocktailsMainComponent {
  openModalSignal = '';
  cocktailForm = this.fb.group({
    name: ['', Validators.required], 
    ingredients: ['', Validators.required],
    baseSpirit: [1, Validators.required],
    preparation: ['', Validators.required],
    origin: '', 
    company: '', 
    notes: '',
  });
  isSubmitted = false;
  spirits = [
    {id: 1, spirit: 'Whiskey'},
    {id: 2, spirit: 'Gin'},
    {id: 3, spriit: 'Tequila'},
    {id: 4, spirit: 'Mezcal'},
    {id: 5, spirit: 'Rum'}
  ]

  constructor(private fb: FormBuilder) {
    
  }

  onFormSubmit(): void {
    console.log(this.cocktailForm.value);
  }

  sendModalOpenEvent() {
    console.log("button clicked");
    this.openModalSignal = 'sending open signal'
  }

}
