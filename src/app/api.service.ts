import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }


  getCars() {
    return this.http.get(this.apiRoot.concat('car/'));
  }

  createCar(name: string, company_name: string, model_name: string, mileage: number, horse_power: number) {
    return this.http.post(
      this.apiRoot.concat('car/'),
      { name, company_name, model_name, mileage, horse_power }
    );
  }

  deleteCar(id: number) {
    return this.http.delete(this.apiRoot.concat(`car/${id}/`));
  }

  updateCar(id: number, name, company_name, model_name, mileage, horse_power){
    return this.http.put(this.apiRoot.concat(`car/${id}/`), { id, name, company_name, model_name, mileage, horse_power}, {observe: 'response'});
  }
}
