import { Component,OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    // lets get a copy of the possible logged in user, so we can load components here only once, instead of every component where they're logged in.
    private user;
    private title:string = 'app';
    
    constructor(private userService:UserService,private router:Router){
        this.userService=userService;
        this.router=router;
    }

    ngOnInit(){
        this.userService.session()
        .then(data=>{
            this.userService.setUser(data);
            this.router.navigate(['/']);
        })
        .catch(err=>console.log(err))

        this.userService // if not user._id, dont show navcomponent
        .getUser()
        .subscribe(data=>this.user=data)
    }
}
