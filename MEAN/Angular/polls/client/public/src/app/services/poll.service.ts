import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PollService {
    constructor(private http:Http){
        this.http=http;
    }

    create(poll){
        return this.http.post("/api/polls/new",poll)
        .map(data=>data.json())
        .toPromise()
    }

    get(id){
        return this.http.get("/api/polls/"+id)
        .map(data=>data.json())
        .toPromise()
    }

    all(){
        return this.http.get("/api/polls")
        .map(data=>data.json())
        .toPromise()
    }

    delete(id){
        return this.http.post("/api/polls/"+id+"/delete",id)
        .map(data=>data.json())
        .toPromise()
    }

    query(q){
        return this.http.get("/api/polls/query/"+q,q)
        .map(data=>data.json())
        .toPromise()
    }

    vote(id,voteId){
        return this.http.post("/api/polls/"+id+"/votes/"+voteId,id,voteId)
        .map(data=>data.json())
        .toPromise()        
    }
}
