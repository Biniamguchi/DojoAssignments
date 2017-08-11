import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
    public data;

    constructor(private weatherService:WeatherService){}

    getCity(query:string){
        this.weatherService.getCity(query)
        .then(data => this.data = data)
        .catch(err => console.log(err))
    }

    ngOnInit() {
        this.getCity("Chicago, IL");
    }
}
