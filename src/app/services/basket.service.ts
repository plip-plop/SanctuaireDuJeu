import { inject, Injectable } from '@angular/core';
import { Product } from '../components/product/product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private http = inject(HttpClient);
  private _basket: Product[] = [];

  getBasket(): Observable<Product[]> {
    return this.http
      .get<Product[]>('http://localhost:8080/api/basket')
      .pipe(tap((basket) => (this._basket = basket)));
  }

  addToBasket(product: Product): Observable<Product> {
    const productId = product.id;
    return this.http
      .post<Product>('http://localhost:8080/api/basket', {
        productId,
      })
      .pipe(tap((item) => this._basket.push(item)));
  }

  getTotal(): number {
    return this._basket.reduce((prev, current) => (prev += current.price), 0);
  }
}
