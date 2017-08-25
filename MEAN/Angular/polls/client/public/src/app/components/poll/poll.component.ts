import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {PollService} from "../../services/poll.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-poll',
    templateUrl: './poll.component.html',
    styleUrls: ['./poll.component.css']
})

export class PollComponent implements OnInit {
    private user;
    private poll = {_user:""};

    constructor(private userService:UserService,private pollService:PollService,private router:Router){
        this.userService=userService;
        this.pollService=pollService;
        this.router=router;
    }

    ngOnInit(){
        this.userService.session()
        .then((data)=>{
            if(!data.user){
                this.router.navigate(['/']);
            }else{
                this.user = data.user;
                this.poll._user = this.user;
            }
        })
        .catch(err=>console.log(err))
    }

    onCreate(){
        this.pollService.create(this.poll)
        .then((data) => {
            this.poll = { _user: this.user._id };
        })
        .catch(err=>console.log(err))
        this.router.navigate(["/dashboard"]);
    }
}
