import { Component, Input } from "@angular/core";
import restaurant from "src/interfaces/restaurant/restaurant.interface";

import { HeroService } from "src/app/hero.service";

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.style.scss'],
  templateUrl: './menu.template.html'
})
export class Menu{
  items: restaurant[] = [];

  constructor(private heroService: HeroService) {}

  getItems(): void {
    this.heroService.getItems().subscribe((data) => {
      this.items = data.restaurants;
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}