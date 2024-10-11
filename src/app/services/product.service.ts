import { inject, Injectable } from '@angular/core';
import { Product } from '../components/product/product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);

  private _products: Product[] = [];

  getProducts() {
    return this._products;
  }

  getProduct(idProduct: number): Observable<Product> {
    return this.http
      .get<Product>(`http://localhost:8080/api/product/${idProduct}`)
      .pipe();
  }

  decreaseProduct(idProduct: number) {
    const product = this._products.find(({ id }) => id === idProduct);

    if (product?.stock) {
      product.stock--;
    }
  }

  fecthProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products').pipe(
      tap((products) => (this._products = products)),
      tap(console.log)
    );
  }
}
