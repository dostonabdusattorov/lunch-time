import { Component, OnInit } from '@angular/core';
import restaurant from 'src/interfaces/restaurant/restaurant.interface';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  count: number = 0;
  title: string = 'res-angular';
  items: restaurant[] = [];

  constructor(private heroService: HeroService) {}

  inc() {
    console.log(this.items);
    this.count++;
  }

  getItems(): void {
    this.heroService.getItems().subscribe((data) => {
      this.items = data.restaurants;
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
