import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AnswerService{
    constructor(private http:Http){
        this.http=http;
    }

    create(answer){
        return this.http.post("/api/answers/new",answer)
        .map(data=>data.json())
        .toPromise()
    }

    like(id){
        return this.http.post("/api/answers/"+id+"/like",id)
        .map(data=>data.json())
        .toPromise()
    }
}
