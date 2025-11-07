import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  product = {
    id: 1,
    title: 'Grand prix de Belcastel',
    description:
      "Faites avancer votre animal en le nourrissant et ainsi tenter de remporter la course du chaudron d'or !",
    photo: 'assets/img/belcastel-xl.png',
    price: 50,
    stock: 2,
  };
}
