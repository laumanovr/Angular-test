import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div class="link"><h3><a [routerLink]="['/']">Items List</a></h3></div>
<hr>
<router-outlet></router-outlet>`,
})

export class AppComponent  { }
