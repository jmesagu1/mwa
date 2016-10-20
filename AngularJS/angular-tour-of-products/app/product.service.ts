/**
 * Created by 985178 on 10/19/2016.
 */

import { Injectable } from '@angular/core';
import {Product} from "./product";
import {PRODUCTS} from "./mock-products";

@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }
}