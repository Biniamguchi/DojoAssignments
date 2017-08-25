import {Component,OnInit,OnDestroy} from '@angular/core';
import {UserService} from "../../services/user.service";
import {PollService} from "../../services/poll.service";
import {ActivatedRoute,Router} from "@angular/router";
import "rxjs/Rx";

@Component({
    selector: 'app-showpoll',
    templateUrl: './showpoll.component.html',
    styleUrls: ['../../app.component.css']
})

export class ShowpollComponent implements OnInit,OnDestroy{
    private user;
    private poll;
    private subscription;

    constructor(private pollService:PollService,private userService:UserService,private route:ActivatedRoute,private router:Router){
        this.pollService=pollService;
        this.userService=userService;
        this.route=route;
        this.router=router;
    }

    ngOnInit() {
        this.subscription = this.route.paramMap.switchMap(
            params=>{
                return this.pollService.get(params.get("id"))
            }
        ).subscribe((data)=>{
            this.poll=data
        })

        this.userService.session()
        .then((data)=>{
            if(!data.user){
                this.router.navigate(['/']);
            }else{
                this.user = data.user;
            }
        })
        .catch(err=>console.log(err))
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onVote(voteId){
        this.pollService.vote(this.poll._id,voteId)
        .then((data)=>{
            this.poll = data;
        })
        .catch(err=>console.log(err))
    }
}
