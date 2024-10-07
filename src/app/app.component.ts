import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { MenuComponent } from './menu/menu.component';
import { Product } from './components/product/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  total = 0;

  products: Product[] = [
    {
      id: 1,
      title: 'Grand prix de Belcastel',
      description:
        "Faites avancer votre animal en le nourrissant et ainsi tenter de remporter la course du chaudron d'or !",
      photo: 'img/belcastel-xl.png',
      price: 50,
      stock: 2,
    },
    {
      id: 2,
      title: 'Dungeon Petz',
      description:
        "Devenez chef des diablotins qui viennent de lancer une nouvelle entreprise : élevage d'animaux de compagnie.",
      photo: 'img/dungeon-petz-xl.png',
      price: 55,
      stock: 2,
    },
    {
      id: 3,
      title: 'Heat',
      description:
        "Préparez-vous à plonger dans l'ambiance des courses automobiles des sixties avec Heat !",
      photo: 'img/heat-xl.png',
      price: 60,
      stock: 1,
    },
    {
      id: 4,
      title: 'Terraforming Mars',
      description:
        'Dans Terraforming Mars, de puissantes corporations travaillent pour rendre la Planète Rouge habitable.',
      photo: 'img/terraforming-mars-xl.png',
      price: 65,
      stock: 5,
    },
  ];

  ajouterProduit(product: Product) {
    let produitRecherche = this.products.find(({ id }) => id === product.id);

    if (produitRecherche?.stock) {
      produitRecherche.stock--;
      this.total += produitRecherche.price;
    }
  }
}
