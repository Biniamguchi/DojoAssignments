import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit{
    private powerLevel:number;
    private multiplier:number = 90;

    constructor() { }

    doPowerLevel(lvl){
        this.powerLevel = lvl*this.multiplier;
    }

    ngOnInit() {
    }
}
