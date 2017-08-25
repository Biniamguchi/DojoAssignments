import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/do";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService{
    private user:BehaviorSubject<any>; // would prefer it private.

    constructor(private http:Http){
        this.http=http;
        this.user=new BehaviorSubject({});
    }

    register(user){
        return this.http.post("/api/users/register",user)
        .map((data)=>data.json())
        .toPromise()
    }

    login(user){
        return this.http.post("/api/users/login",user)
        .map((data)=>data.json())
        .toPromise()
    }

    logout(){
        return this.http.post("/api/users/logout",true)
        .map((data)=>data.json())
        .toPromise()
    }

    session(){ // returns users session + previous URL location.
        return this.http.post("/api/users/session",true)
        .map(data=>data.json())
        .toPromise()
    }

    setUser(value){
        this.user.next(value);
    }

    getUser(){ // sub to this after calling in any components ngOnInit.
        return this.user.asObservable();
    }
}
