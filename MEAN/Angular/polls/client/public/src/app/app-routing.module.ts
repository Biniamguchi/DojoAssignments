import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

import {PollComponent} from "./components/poll/poll.component";
import {ShowpollComponent} from "./components/showpoll/showpoll.component";

const routes: Routes = [
    {path:'',pathMatch:'full',component:UserComponent},
    {path:'dashboard',component:DashboardComponent},

    {path:'polls/new',component:PollComponent},
    {path:'polls/:id',component:ShowpollComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
