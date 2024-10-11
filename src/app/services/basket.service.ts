import { Injectable } from '@angular/core';
import { Product } from '../components/product/product';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private _basket: Product[] = [];

  getBasket(): Product[] {
    return this._basket;
  }

  addToBasket(product: Product): void {
    this._basket.push(product);
  }

  getTotal(): number {
    return this._basket.reduce((prev, current) => (prev += current.price), 0);
  }
}
