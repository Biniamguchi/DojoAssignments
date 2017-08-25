import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {LoginService} from "../login.service";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['../app.component.css']
})

export class NavComponent implements OnInit{
    private loginService:LoginService;
    private user$;

    constructor(loginService:LoginService){
        this.loginService = loginService;
    }

    ngOnInit(){
        this.user$ = this.loginService.doSubscribe();
    }
}
