import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { MainComponent } from './main/main.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';

import { ProductService } from "./product.service";
import { ProductsComponent } from './products/products.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        NewProductComponent,
        EditProductComponent,
        HomeComponent,
        ProductsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule{}
