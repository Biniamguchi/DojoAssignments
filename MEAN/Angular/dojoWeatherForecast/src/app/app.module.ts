import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { WeatherService } from "./weather.service";
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DCComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
    declarations: [
        AppComponent,
        SeattleComponent,
        SanJoseComponent,
        BurbankComponent,
        DallasComponent,
        DCComponent,
        ChicagoComponent,
        WeatherComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule { }
