import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css'],
})
export class EroiComponent {
  
  eroe1: Hero = {
    id: 1,
    name: 'Duck Dodgers',
  };
}
