import {Component,OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['../../app.component.css']
})

export class UserComponent implements OnInit{
    private reg = {};
    private log = {};

    constructor(private userService:UserService,private router:Router){
        this.userService=userService;
        this.router=router;
    }

    ngOnInit(){
        this.userService.setUser({}); // Logout purposes.
    }

    onRegister(){
        this.userService.register(this.reg)
        .then(data=>{
            if(data.user){
                this.userService.setUser(data.user); // set the value of the subject as the new user, so we can subscribe to it from other components.
                this.router.navigate(["/dashboard"]);
            }else{
                // log errs + reset register form
                this.reg = {};
            }
        })
        .catch(err=>console.log(err))
    }

    onLogin(){
        this.userService.login(this.log)
        .then(data=>{
            if(data.user){
                this.userService.setUser(data.user); // same as above
                this.router.navigate(["/dashboard"]);
            }else{
                this.log={};
                // log errs + reset login form
            }
        })
        .catch(err=>console.log(err))
    }
}
