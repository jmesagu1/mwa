/**
 * Created by 985178 on 10/21/2016.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import {ProductDetailComponent} from "./product-detail.component";
import {ProductComponent} from "./product.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: ProductDetailComponent },
    { path: 'products',     component: ProductComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
