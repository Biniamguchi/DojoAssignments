import { Component, OnInit,OnDestroy} from '@angular/core';
import { Product } from "../product";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit,OnDestroy{
    private activatedRoute:ActivatedRoute;
    private product:Product;
    private subscription;
    private router:Router;
    private id;

    constructor(activatedRoute:ActivatedRoute){
        this.activatedRoute=activatedRoute;
    }

    ngOnInit(){
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = +params["id"];
            this.product = ProductService.get(this.id);
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onSubmit(){
        ProductService.update(this.id,this.product);
    }
}
