import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { HeroService } from "src/app/hero.service";
import restaurant from "src/interfaces/restaurant/restaurant.interface";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.template.html',
  styleUrls: ['./detail.style.scss']
})
export class Detail implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private service: HeroService) {}

  restaurant: restaurant | undefined;

  title: string = '';
  lat: number = 0;
  lng: number = 0;

  getItem(id: string): void {
    this.service.getItems().subscribe((data) => {
      // this.restaurant = data.restaurants.filter((el: any) => el.id === id);
      this.restaurant = data.restaurants.filter((el: restaurant) => el.name.split(' ').join('') === id)[0]
      // console.log(data.restaurants)
      this.title = this.restaurant.name;
      this.lat = this.restaurant.location.lat;
      this.lng = this.restaurant.location.lng;
      console.log(this.title, this.lat, this.lng)
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.getItem(data['id'])
    })
  }
}