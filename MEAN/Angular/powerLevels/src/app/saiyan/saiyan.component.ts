import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
    private powerLevel:number;
    private multiplier:number = 10;

    doPowerLevel(lvl){
        this.powerLevel = lvl*this.multiplier;
    }

    constructor(){}

    ngOnInit() {
    }
}
