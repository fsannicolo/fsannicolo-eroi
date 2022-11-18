import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './mock-hero.component';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css'],
})
export class EroiComponent {
  listaEroi = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
} 
