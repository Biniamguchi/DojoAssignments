import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    private products:Array<Product>;

    constructor(){}

    ngOnInit(){
        this.products = ProductService.all();
    }

    onDelete(id:number){
        ProductService.destroy(id);
        this.products = ProductService.all();
    }
}
