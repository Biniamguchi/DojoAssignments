import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";


@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DCComponent implements OnInit {
    public data;

    constructor(private weatherService:WeatherService){}

    getCity(query:string){
        this.weatherService.getCity(query)
        .then(data => this.data = data)
        .catch(err => console.log(err))
    }

    ngOnInit() {
        this.getCity("Washington D.C.");
    }
}
