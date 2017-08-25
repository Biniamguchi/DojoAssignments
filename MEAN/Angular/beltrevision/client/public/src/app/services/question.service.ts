import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class QuestionService{
    constructor(private http:Http){
        this.http=http;
    }

    create(question){
        return this.http.post("/api/questions/new",question)
        .map(data=>data.json())
        .toPromise()
    }

    get(id){
        return this.http.get("/api/questions/"+id)
        .map(data=>data.json())
        .toPromise()
    }

    all(){
        return this.http.get("/api/questions")
        .map(data=>data.json())
        .toPromise()
    }

    query(q){
        return this.http.get("/api/questions/query/"+q,q)
        .map(data=>data.json())
        .toPromise()
    }
}
