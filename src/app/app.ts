import { Component, signal } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Card } from "../card/card";

@Component({
  selector: 'app-root',
  imports: [MenuComponent, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('SanctuaireDuJeu');
}
