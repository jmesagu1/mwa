import { Component } from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";
import { OnInit } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My products</h2>
        <ul class="product">
          <li [class.selected]="product === selectedProduct"  *ngFor="let product of products" (click)="onSelect(product)">
            <span class="badge">{{product.id}}</span> {{product.name}}
          </li>
        </ul>
       <my-product-detail [product]="selectedProduct"></my-product-detail>
    `
})
export class AppComponent implements OnInit {
    title = 'Tour of Products';
    products : Product[];
    selectedProduct: Product;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.productService.getProducts().then(products => this.products = products);
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}