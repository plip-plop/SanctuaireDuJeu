import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../card/product';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private _basket = signal<Product[]>([]);
  private _total = signal<number>(0);

  getBasket(): WritableSignal<Product[]> {
    return this._basket;
  }

  addToBasket(product: Product): void {
    this._basket.update((products) =>
      products.map((p) => (p.id === product.id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p))
    );
  }

  getTotal(): WritableSignal<number> {
    return this._total;
  }
}
