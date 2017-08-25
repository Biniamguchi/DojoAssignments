import {NgModule} from "@angular/core";
import {Routes,RouterModule} from  "@angular/router";
import {AppComponent} from "./app.component";
import {QuestionsComponent} from "./questions/questions.component";
import {ShowquestionComponent} from "./showquestion/showquestion.component";
import {LoginComponent} from "./login/login.component";
import {DashComponent} from "./dash/dash.component";
import {AnswerComponent} from "./answer/answer.component";

const routes:Routes = [
    {path:"",pathMatch:"full",component:LoginComponent},
    {path:"dashboard",component:DashComponent},
    {path:"logout",redirectTo:""},
    {path:"questions/new",component:QuestionsComponent},
    {path:"questions/:id",component:ShowquestionComponent},
    {path:"questions/:id/answers/new",component:AnswerComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
