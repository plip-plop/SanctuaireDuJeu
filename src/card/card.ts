import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from './product';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  product = input.required<Product>();
  addToBasket = output<Product>();

  onClick() {
    this.addToBasket.emit(this.product());
  }
}
