import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
