import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { Car } from './car.interface';

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})

export class AppComponent implements OnInit {

  items: Car[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCars().subscribe(
      (items: Car[]) => this.items = items,
      (error: any) => this.error = error
    );
  }

  add(Name: string, company_name: string, model_name: string, mileage: number, horse_power: number) {
    this.api.createCar(Name, company_name, model_name, mileage, horse_power).subscribe(
      (item: Car) => this.items.push(item)
    );
  }

  delete(id: number) {
    this.api.deleteCar(id).subscribe(
      (success: any) => this.items.splice(
        this.items.findIndex(item => item.id === id)
      )
    );
  }
}