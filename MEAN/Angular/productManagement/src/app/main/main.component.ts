import { Component, OnInit,Input } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    private productService:ProductService;
    private products:Array<Product>;
    @Input() product:Product;

    constructor(productService:ProductService){
        this.productService = productService;
    }

    ngOnInit(){
    }
}
