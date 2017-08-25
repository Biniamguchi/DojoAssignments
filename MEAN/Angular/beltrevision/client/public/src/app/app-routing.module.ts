import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

import {QuestionComponent} from "./components/question/question.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {ShowquestionComponent} from "./components/showquestion/showquestion.component";

const routes: Routes = [
    {path:'',pathMatch:'full',component:UserComponent},
    {path:'dashboard',component:DashboardComponent},

    {path:'questions/new',component:QuestionComponent},
    {path:'questions/:id',component:ShowquestionComponent},
    {path:'questions',component:QuestionsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
