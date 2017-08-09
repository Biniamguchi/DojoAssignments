import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-human',
    templateUrl: './human.component.html',
    styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
    private powerLevel:number = 1;
    private multiplier:number = 1;

    constructor(){}

    doPowerLevel(lvl){
        this.powerLevel = lvl*this.multiplier;
    }

    ngOnInit(){
    }
}
