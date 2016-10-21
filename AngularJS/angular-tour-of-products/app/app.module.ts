import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductService} from "./product.service";
import {CalculatePricePipe} from "./calculate-price.pipe";
import {ProductComponent} from "./product.component";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
      AppRoutingModule
  ],
  providers: [ProductService],
  declarations: [
    AppComponent,ProductComponent,ProductDetailComponent,CalculatePricePipe,DashboardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
