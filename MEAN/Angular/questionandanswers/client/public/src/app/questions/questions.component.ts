import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {Question} from "../question";
import {QuestionService} from "../question.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
    private user$;
    private loginService:LoginService;
    private question:Question;
    private questionService:QuestionService;
    private router:Router;

    constructor(loginService:LoginService,questionService:QuestionService,router:Router){
        this.questionService = questionService;
        this.loginService    = loginService;
        this.router          = router;
        this.question        = new Question();
    }

    ngOnInit(){
        this.user$ = this.loginService.doSubscribe();
    }

    onCreate(){
        this.question._user = this.user$.source._value._id; // Gets checked on server.

        this.questionService.create(this.question)
        .then((data)=>{
            this.question = new Question();
            this.question._user = this.user$.source._value._id;

            this.router.navigate(["/dashboard"]);
        })
        .catch(err=>console.log(err))
    }
}
