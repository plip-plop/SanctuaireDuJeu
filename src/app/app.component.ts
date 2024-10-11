import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './components/product/product';
import { ProductComponent } from './components/product/product.component';
import { MenuComponent } from './menu/menu.component';
import { BasketService } from './services/basket.service';
import { ProductService } from './services/product.service';
import { CatalogComponent } from './components/catalog/catalog.component';

registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductComponent,
    MenuComponent,
    CommonModule,
    CatalogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
