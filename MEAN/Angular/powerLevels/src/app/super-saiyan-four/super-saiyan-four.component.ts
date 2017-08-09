import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnInit {
    private powerLevel:number;
    private multiplier:number = 500;

    constructor() { }

    doPowerLevel(lvl){
        this.powerLevel = lvl*this.multiplier;
    }

    ngOnInit() {
    }
}
