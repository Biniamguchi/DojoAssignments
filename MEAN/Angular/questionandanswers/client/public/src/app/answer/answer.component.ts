import {Component,OnInit} from '@angular/core';
import {Answer} from "../answer";
import {AnswerService} from "../answer.service";
import {QuestionService} from "../question.service";
import {Question} from "../question";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../login.service";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit{
    private answerService:AnswerService;
    private questionService:QuestionService;
    private loginService:LoginService;
    private answer:Answer;
    private question:Question;
    private route:ActivatedRoute;
    private router:Router;
    private user$;

    constructor(answerService:AnswerService,questionService:QuestionService,loginService:LoginService,route:ActivatedRoute,router:Router){
        this.answerService=answerService;
        this.questionService=questionService;
        this.loginService=loginService;
        this.route=route;
        this.router=router;
        this.answer = new Answer();

        this.route
        .paramMap
        .switchMap((params)=>{
            return this.questionService.get(params.get("id"))
        }).subscribe(data=>this.question=data.question)
    }

    ngOnInit(){
        this.user$=this.loginService.doSubscribe();
    }

    onCreate(){
        this.answer._user = this.user$.source._value._id;

        this.answerService.create(this.question._id,this.answer)
        .then((data)=>{
            this.answer = new Answer();
            this.answer._user = this.user$.source._value._id;

            this.router.navigate(["/questions",this.question._id]);
        })
        .catch(err=>console.log(err))
    }
}
