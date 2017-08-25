import {Component,OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {QuestionService} from "../question.service";
import {Question} from "../question";
import {User} from "../user";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['../app.component.css']
})

export class DashComponent implements OnInit{
    private loginService:LoginService;
    private questionService:QuestionService;
    private router:Router;
    private user$:Observable<User>;
    private questions;

    constructor(loginService:LoginService,questionService:QuestionService,router:Router){
        this.loginService=loginService;
        this.questionService=questionService;
        this.router=router;
        this.user$ = new Observable<User>();
    }

    ngOnInit(){
        this.user$ = this.loginService.doSubscribe();
        this.getQuestions();
    }

    getQuestions(){
        this.questionService.all()
        .then((data)=>{
            this.questions=<Array<Question>>data.questions;
        })
        .catch(err=>console.log(err))
    }
}
