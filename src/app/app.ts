import { Component, signal } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Card } from '../card/card';
import { Product } from '../card/product';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  total = signal<number>(0);

  products = signal<Product[]>([
    {
      id: 1,
      title: 'Grand prix de Belcastel',
      description:
        "Faites avancer votre animal en le nourrissant et ainsi tenter de remporter la course du chaudron d'or !",
      photo: 'assets/img/belcastel-xl.png',
      price: 50,
      stock: 2,
    },
    {
      id: 2,
      title: 'Dungeon Petz',
      description:
        "Devenez chef des diablotins qui viennent de lancer une nouvelle entreprise : élevage d'animaux de compagnie.",
      photo: 'assets/img/dungeon-petz-xl.png',
      price: 55,
      stock: 2,
    },
    {
      id: 3,
      title: 'Heat',
      description:
        "Préparez-vous à plonger dans l'ambiance des courses automobiles des sixties avec Heat !",
      photo: 'assets/img/heat-xl.png',
      price: 60,
      stock: 1,
    },
    {
      id: 4,
      title: 'Terraforming Mars',
      description:
        'Dans Terraforming Mars, de puissantes corporations travaillent pour rendre la Planète Rouge habitable.',
      photo: 'assets/img/terraforming-mars-xl.png',
      price: 65,
      stock: 5,
    },
  ]);

  ajouterAuPanier(product: Product) {
    this.products.update((products) =>
      products.map((p) => (p.id === product.id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p))
    );

    this.total.update((valeurActuelle) => valeurActuelle + product.price);
  }
}
