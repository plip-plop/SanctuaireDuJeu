import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { ProductComponent } from '../product/product.component';
import { CurrencyPipe } from '@angular/common';
import { BasketService } from '../../services/basket.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MenuComponent, ProductComponent, CurrencyPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  productService = inject(ProductService);
  basketService = inject(BasketService);

  get products() {
    return this.productService.getProducts();
  }
  get total(): number {
    return this.basketService.getTotal();
  }

  ngOnInit() {
    this.productService.fecthProducts().subscribe();
  }
  ajouterProduit(product: Product) {
    this.basketService
      .addToBasket(product)
      .subscribe((product) => this.productService.decreaseProduct(product.id));
  }
}
