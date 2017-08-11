import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class WeatherService{
    private key:string   = "&APPID=90624cc9255f43fb0afc02b5a0ca2d75";
    private api:string   = "http://api.openweathermap.org/data/2.5/weather?q=";

    constructor(private http:Http){}

    getCity(query:string){
        query = this.api+query+this.key;
        return this.http.get(query).map(
            (data) => data.json()
        ).toPromise();
    }
}
