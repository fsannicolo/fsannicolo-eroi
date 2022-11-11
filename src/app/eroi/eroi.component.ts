import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css'],
})
export class EroiComponent implements OnInit {
  hero: string = 'Duck Dodgers';

  constructor() {}

  ngOnInit() {}
}
