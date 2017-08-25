import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import {UserService} from "./services/user.service";
import {PollService} from "./services/poll.service";

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { PollComponent } from './components/poll/poll.component';
import { ShowpollComponent } from './components/showpoll/showpoll.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        DashboardComponent,
        NavComponent,
        PollComponent,
        ShowpollComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
    ],
    providers: [UserService,,PollService],
    bootstrap: [AppComponent]
})
export class AppModule{}
