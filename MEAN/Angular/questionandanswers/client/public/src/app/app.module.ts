import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {LoginService} from "./login.service";
import {QuestionService} from "./question.service";
import {AnswerService} from "./answer.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { NavComponent } from './nav/nav.component';
import { QuestionsComponent } from './questions/questions.component';
import { ShowquestionComponent } from './showquestion/showquestion.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashComponent,
        NavComponent,
        QuestionsComponent,
        ShowquestionComponent,
        AnswerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule
    ],
    providers: [LoginService,QuestionService,AnswerService],
    bootstrap: [AppComponent]
})
export class AppModule{}
