import { Component, OnInit,Input } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
    private user;

    constructor(private userService:UserService){
        this.userService=userService;
    }

    ngOnInit(){
        this.userService.session()
        .then((data)=>{
            this.user=data.user;
        }).catch(err=>console.log(err))
    }

    onLogout(){
        this.userService.logout();
    }
}
