/**
 * Created by 985178 on 10/21/2016.
 */

import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
      <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/products" routerLinkActive="active">Products</a>
      </nav>
      <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title = 'Tour of Products';
}
