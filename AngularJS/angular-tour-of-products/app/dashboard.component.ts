/**
 * Created by 985178 on 10/21/2016.
 */
import { Component } from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent {

    constructor(
        private router: Router,
        private productService: ProductService) {
    }

    products: Product[] = [];


    ngOnInit(): void {
        this.productService.getProducts()
            .then(products => this.products = products.slice(1, 5));
    }

    gotoDetail(product: Product): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }
}
