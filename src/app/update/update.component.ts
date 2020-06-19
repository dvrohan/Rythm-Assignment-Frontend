import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Car } from '../car.interface';

import { ApiService } from '../api.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  errorCode: number;
  error: any;
  id: number;

  constructor(
    private route: ActivatedRoute, private api: ApiService, private router: Router
  ) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  update(Name: string, companyName: string, modelName: string, mileage: number, horsePower: number) {
    this.api.updateCar(this.id, Name, companyName, modelName, mileage, horsePower).subscribe(
      resp => {
        console.log(resp.status);
        this.error = resp.statusText;
        this.errorCode = resp.status;
      }
    );
    if (this.errorCode == 200){
      this.router.navigate(['']);
      error = "Successful";
    }
    else{
      this.error = "Error";
    }
  }
}
