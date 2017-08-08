import { Component } from '@angular/core';
let rand = Math.random;
let flr  = Math.floor;

let r255 = function(){
    return flr(rand()*255);
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Retro Barcode Generator';
  
    cols = [
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()},
        {col:r255()+","+r255()+","+r255()}
    ]
}
