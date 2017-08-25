import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../app.component.css']
})

export class DashboardComponent implements OnInit {
    private user;

    constructor(private userService:UserService,private router:Router){
        this.userService=userService;
        this.router=router;
    }

    ngOnInit(){
        this.userService
        .getUser() // Grab the user as an observable, so we can subscribe to its changes.
        .subscribe((data)=>{
            data._id?true:this.router.navigate(["/"]); // You cant be here if you didnt login/register.
            this.user=data;
        })
    }
}
