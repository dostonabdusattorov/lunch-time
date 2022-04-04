import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import restaurant from 'src/interfaces/restaurant/restaurant.interface';
import restaurants from 'src/interfaces/restaurant/restaurants.interface';

const API = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

// What is hero service? follow proper naming conventions

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  // getItems(): Observable<string[]> {
  //   return of(['ss', 'dd']);
  // }

  getItems(): Observable<restaurants> {
    return this.http.get<restaurants>(`${API}`);
  }
}
