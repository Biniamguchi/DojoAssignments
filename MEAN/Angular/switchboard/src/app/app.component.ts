import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Switchboard';

    switches = [
        {text:"OFF",value:false},
        {text:"OFF",value:false},
        {text:"OFF",value:false},
        {text:"OFF",value:false},
        {text:"OFF",value:false},
        {text:"OFF",value:false},
        {text:"OFF",value:false},
        {text:"OFF",value:false},
        {text:"OFF",value:false},
        {text:"OFF",value:false},
    ];

    doClick(ind){
        let sw = this.switches[ind]

        if(sw.value){
            sw.text = "OFF";
        }else{
            sw.text = "ON";
        }

        this.switches[ind].value = !this.switches[ind].value;
    }
}
