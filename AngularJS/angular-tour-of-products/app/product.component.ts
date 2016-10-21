import { Component } from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
    selector: 'my-products',
    moduleId: module.id,
    templateUrl: 'products.component.html',
    styleUrls: [ 'products.component.css' ]
})
export class ProductComponent implements OnInit {
    products : Product[];
    selectedProduct: Product;

    constructor(private productService: ProductService,
                private router : Router) {}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedProduct.id]);
    }
}