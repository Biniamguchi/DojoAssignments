import { Component,OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    private user;
    private title:string = 'app';
    
    constructor(private userService:UserService,private router:Router){
        this.userService=userService;
        this.router=router;
    }

    ngOnInit(){
        this.userService.session()
        .then((data)=>{
            if(data.user){
                this.user = data.user;
            }
        })
        .catch(err=>console.log(err))
    }
}
