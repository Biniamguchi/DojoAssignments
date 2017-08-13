import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";


@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.css']
})

export class NewProductComponent implements OnInit{
    private product:Product;
    
    ngOnInit(){
        this.product = new Product();
    }

    onSubmit(){
        ProductService.create(this.product);
        this.product = new Product();
    }
}
