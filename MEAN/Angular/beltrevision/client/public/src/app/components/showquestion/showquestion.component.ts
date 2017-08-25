import {Component,OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {QuestionService} from "../../services/question.service";
import {AnswerService} from "../../services/answer.service";
import {ActivatedRoute,Router} from "@angular/router";
import "rxjs/Rx";

@Component({
    selector: 'app-showquestion',
    templateUrl: './showquestion.component.html',
    styleUrls: ['../../app.component.css']
})

export class ShowquestionComponent implements OnInit {
    private user;
    private question;
    private answer={_user:"",_question:"",description:""};
    private subscription;

    constructor(private questionService:QuestionService,private answerService:AnswerService,private userService:UserService,private route:ActivatedRoute,private router:Router){
        this.questionService=questionService;
        this.answerService=answerService;
        this.userService=userService;
        this.route=route;
        this.router=router;
    }

    ngOnInit(){
        this.subscription = this.route.paramMap.switchMap(
            params=>{
                return this.questionService.get(params.get("id"))
            }
        ).subscribe((data)=>{
            this.question=data
            this.answer._question = this.question._id;
        })

        this.userService.getUser()
        .subscribe(data=>{
            this.user=data;
            this.answer._user = this.user._id;
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onCreate(){
        this.answerService.create(this.answer)
        .then((data)=>{
            this.question.answers.push(data);
            this.answer.description = "";
        })
        .catch(err=>console.log(err))
    }

    onLike(answerId){
        this.answerService.like(answerId)
        .then((data)=>{
            this.question.answers.forEach((val,key)=>{
                if(val._id == answerId){
                    val.likes = data; // Like count is returned.
                }
            })
        })
        .catch(err=>console.log(err))

        this.questionService.get(this.question._id)
        .then(data=>this.question=data)
        .catch(err=>console.log(err))
    }
}
