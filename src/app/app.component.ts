import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './components/product/product';
import { ProductComponent } from './components/product/product.component';
import { MenuComponent } from './menu/menu.component';
import { BasketService } from './services/basket.service';
import { ProductService } from './services/product.service';

registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, MenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  productService = inject(ProductService);
  basketService = inject(BasketService);
  products: Product[] = this.productService.getProducts();

  get total(): number {
    return this.basketService.getTotal();
  }

  ajouterProduit(product: Product) {
    this.basketService.addToBasket(product);
    this.productService.decreaseProduct(product.id);

    // let produitRecherche = this.products.find(({ id }) => id === product.id);

    // if (produitRecherche?.stock) {
    //   produitRecherche.stock--;
    //   this.total += produitRecherche.price;
    // }
  }
}
