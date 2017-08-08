import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = "U.S. Time Zone Display";
    now     = Date.now();
    curZone = "EST";
    timezones:Array<any> = [
        {zone:"PST",toggled:false},
        {zone:"MST",toggled:false},
        {zone:"CST",toggled:false},
        {zone:"EST",toggled:false},
        {zone:"Clear",toggled:false}
    ];

    disableZones(){
        for(let i=0;i<this.timezones.length;i++){
            this.timezones[i].toggled = false;
        }        
    }

    onClick(timezone){
        if(timezone.toggled){return;}

        if(timezone.zone == "Clear"){
            this.now     = null;
            this.curZone = null;
            this.disableZones();
            return;
        }

        this.disableZones();
        timezone.toggled = !timezone.toggled;
        this.now         = Date.now();
        this.curZone     = timezone.zone;
    }
}
