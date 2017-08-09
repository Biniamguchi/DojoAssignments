import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit {
    private powerLevel:number;
    private multiplier:number = 150;

    constructor(){}

    doPowerLevel(lvl){
        this.powerLevel = lvl*this.multiplier;
    }

    ngOnInit(){
    }
}
