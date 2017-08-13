import { Injectable } from '@angular/core';
import "rxjs";
import { Product } from "./product";

@Injectable()
export class ProductService{ // I dont understand observables / what we're trying to do, so these methods will be public static for ease of mind, using it as a shared service.
    private static products:Array<Product> = [];

    constructor(){}
    public static all():Array<Product>{
        return ProductService.products;
    }
    public static create(product:Product){
        console.log(product);
        ProductService.products.push(product);
    }
    public static update(id:number,vals:Object){
        let product = ProductService.products[id];

        for(let key in vals){
            product[key] = vals[key];
        }
    }
    public static destroy(id:number):void{
        ProductService.products.splice(id,1);
    }
    public static get(id:number):Product{
        return ProductService.products[id];
    }
}
