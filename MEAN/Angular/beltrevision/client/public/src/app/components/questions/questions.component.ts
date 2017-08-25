import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../services/question.service";

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['../../app.component.css']
})

export class QuestionsComponent implements OnInit{
    private questions;
    private query={query:""};

    constructor(private questionService:QuestionService){
        this.questionService=questionService;
        this.questions=[];
    }

    ngOnInit(){
        this.questionService.all()
        .then((data)=>{
            this.questions=data;
        })
        .catch()
    }

    onQuery(){
        // this.display_questions = this.questions.filter(question => question.toLowerCase().title.includes(this.query.query.toLowerCase()))
        if(this.query.query.length < 1 || this.query.query == ""){
            this.questionService.all()
            .then(data=>this.questions=data)
            .catch()
        }else{
            this.questionService.query(this.query.query)
            .then(data=>this.questions=data)
            .catch()
        }
    }
}
