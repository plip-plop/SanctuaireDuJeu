import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from './product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input()
  product!: Product;

  @Output()
  addToBasket = new EventEmitter<Product>();

  handleClick() {
    this.addToBasket.emit(this.product);
  }
}
