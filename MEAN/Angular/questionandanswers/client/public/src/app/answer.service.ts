import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Answer} from "./answer";

@Injectable()
export class AnswerService {
    private http:Http;

    constructor(http:Http){
        this.http=http;
    }

    public create(questionId,answer:Answer){
        return this.http.post("/api/questions/"+questionId+"/answers/new",answer)
        .map(data=>data.json())
        .toPromise()
    }

    public all(){
        return this.http.get("/api/answers")
        .map(data=>data.json())
        .toPromise()
    }

    public get(id){
        return this.http.get("/api/answers/"+id)
        .map(data=>data.json())
    }

    public like(id){
        return this.http.post("/api/answers/"+id+"/like",id)
        .map(data=>data.json())
        .toPromise()
    }
}

