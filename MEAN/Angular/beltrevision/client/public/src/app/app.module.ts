import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import {UserService} from "./services/user.service";
import {QuestionService} from "./services/question.service";
import {AnswerService} from "./services/answer.service";

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ShowquestionComponent } from './components/showquestion/showquestion.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        DashboardComponent,
        NavComponent,
        QuestionComponent,
        QuestionsComponent,
        ShowquestionComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
    ],
    providers: [UserService,QuestionService,AnswerService],
    bootstrap: [AppComponent]
})
export class AppModule{}
