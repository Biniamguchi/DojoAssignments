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
        this.userService.logout();
    }

    onRegister(){
        this.userService.register(this.reg)
        .then(data=>{
            if(data.user){
                this.router.navigate(["/dashboard"]);
            }else{
                this.reg = {};
            }
        })
        .catch(err=>console.log(err))
    }

    onLogin(){
        this.userService.login(this.log)
        .then(data=>{
            if(data.user){
                this.router.navigate(["/dashboard"]);
            }else{
                this.log={};
            }
        })
        .catch(err=>console.log(err))
    }
}
