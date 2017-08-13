import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { ProductsComponent } from "./products/products.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

const routes: Routes = [
    {path:"",children: [],component:HomeComponent},
    
    {path:"products",children:[],component:ProductsComponent},
    {path:"products/new",component:NewProductComponent},
    {path:"products/edit/:id",component:EditProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
