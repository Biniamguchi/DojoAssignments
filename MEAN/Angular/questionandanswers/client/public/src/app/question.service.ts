import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Question} from "./question";

@Injectable()
export class QuestionService{
    private http:Http;

    constructor(http:Http){
        this.http=http;
    }

    public create(question:Question){
        return this.http.post("/api/questions/new",question)
        .map(data=>data.json())
        .toPromise()
    }

    public all(){
        return this.http.get("/api/questions")
        .map(data=>data.json())
        .toPromise()
    }

    public get(id){
        return this.http.get("/api/questions/"+id)
        .map(data=>data.json())
    }
}
