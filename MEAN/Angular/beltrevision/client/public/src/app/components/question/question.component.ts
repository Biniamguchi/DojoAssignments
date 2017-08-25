import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {QuestionService} from "../../services/question.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit{
    private user;
    private question = {_user:""};

    constructor(private userService:UserService,private questionService:QuestionService,private router:Router){
        this.userService=userService;
        this.questionService=questionService;
        this.router=router;
    }

    ngOnInit(){
        this.userService
        .getUser()
        .subscribe((data)=>{
            data._id?true:this.router.navigate(["/"]);
            this.user=data
            this.question._user=this.user._id;
        })
    }

    onCreate(){
        this.questionService.create(this.question)
        .then((data) => {
            this.question = { _user: this.user._id };
        })
        .catch(err=>console.log(err))

        this.router.navigate(["/questions"]);
    }
}
