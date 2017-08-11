import { Component } from '@angular/core';
import { WeatherService } from "./weather.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    private title:string = 'app';
    private data;
    private query:string = "";

    constructor(private weatherService:WeatherService){}

    getCity(query:string){
        this.weatherService.getCity(query)
        .then(data => this.data = data)
        .catch(err => console.log(err))
    }

}
