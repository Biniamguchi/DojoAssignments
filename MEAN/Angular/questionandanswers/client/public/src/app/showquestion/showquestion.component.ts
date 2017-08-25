import { Component, OnInit } from '@angular/core';
import {Question} from "../question";
import {QuestionService} from "../question.service";
import {AnswerService} from "../answer.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import "rxjs";

@Component({
    selector: 'app-showquestion',
    templateUrl: './showquestion.component.html',
    styleUrls: ['./showquestion.component.css']
})

export class ShowquestionComponent implements OnInit{
    private answerService:AnswerService;
    private questionService:QuestionService;
    private question:Question;
    private route:ActivatedRoute;
    private router:Router;

    constructor(questionService:QuestionService,route:ActivatedRoute,router:Router,answerService:AnswerService){
        this.questionService=questionService;
        this.answerService=answerService;
        this.route=route;
        this.router=router;

        this.route
        .paramMap
        .switchMap((params)=>{
            return this.questionService.get(params.get("id"))
        }).subscribe(data=>this.question=data.question)
    }

    ngOnInit(){
    }

    onLike(answer){
        console.log(answer);
        this.answerService.like(answer._id)
        this.router.navigate(["/questions/",this.question._id]);
    }
}
