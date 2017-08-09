import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {
    private powerLevel:number;
    private multiplier:number = 250;

    constructor(){}

    doPowerLevel(lvl){
        this.powerLevel = lvl*this.multiplier;
    }

    ngOnInit() {
    }
}
