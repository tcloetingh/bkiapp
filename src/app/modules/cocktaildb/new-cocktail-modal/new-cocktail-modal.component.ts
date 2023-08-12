import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-new-cocktail-modal',
  templateUrl: './new-cocktail-modal.component.html',
  styleUrls: ['./new-cocktail-modal.component.css']
})

export class NewCocktailModalComponent {
  @Input() openModalSignalchild = '';

  constructor() {
    
  }

  ngOnInit() {
    console.log(this.openModalSignalchild)
  }

  ngOnChanges(change: SimpleChanges) {
    this.openModal();
  }

  openModal() {

  }

}
