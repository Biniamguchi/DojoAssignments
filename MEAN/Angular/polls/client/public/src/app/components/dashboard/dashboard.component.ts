import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {PollService} from "../../services/poll.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../app.component.css']
})

export class DashboardComponent implements OnInit {
    private user;
    private polls;
    private tmp;
    private query={query:""};

    constructor(private userService:UserService,private pollService:PollService,private router:Router){
        this.userService=userService;
        this.pollService=pollService;
        this.router=router;
        this.polls = [];
    }

    ngOnInit(){
        this.userService.session()
        .then((data)=>{
            if(!data.user){
                this.router.navigate(['/']);
            }else{
                this.user = data.user;
            }
        })
        .catch(err=>console.log(err))

        this.pollService.all()
        .then((data)=>{
            this.polls=data
        })
        .catch(err=>console.log(err))
    }

    onQuery(){
        if(this.query.query.length < 1 || this.query.query == ""){
            this.pollService.all()
            .then(data=>this.polls=data)
            .catch()
        }else{
            this.pollService.query(this.query.query)
            .then(data=>this.polls=data)
            .catch()
        }
    }

    onDelete(id){
        this.pollService.delete(id)
        .then((data)=>{
            this.polls.forEach((val,key)=>{
                if(val._id == this.polls[key]._id){
                    this.polls.splice(key,1);
                }
            })
        })
        .catch(err=>console.log(err))
    }
}
