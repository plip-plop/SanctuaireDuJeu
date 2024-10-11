import { Injectable } from '@angular/core';
import { Product } from '../components/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: Product[] = [
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

  getProducts() {
    return this._products;
  }
  getProduct(idProduct: number): Product | undefined {
    const product = this._products.find(({ id }) => id === idProduct);

    return product;
  }

  decreaseProduct(idProduct: number) {
    const product = this._products.find(({ id }) => id === idProduct);

    if (product?.stock) {
      product.stock--;
    }
  }
}
