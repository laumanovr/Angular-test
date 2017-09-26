import { Component, OnInit } from '@angular/core';
import { HttpService} from './services/http.service';
import {Observable} from "rxjs";
import {Item} from './models/item';


@Component({
  selector: 'my-app',
  template: `
<div class="items">
  <div class="item" *ngFor="let item of items">
    <a [routerLink]="['description', item.id]">
      <img [src]="'/assets/images/' + item.id + '.png'" alt="test image">
      <div class="info">
        <p><b>title:</b> {{item.title}}</p>
        <p><b>body:</b> {{item.body}}</p>
      </div>
    </a>
  </div>
</div>
`,
})
export class AppItems implements OnInit {

  items: Item[]=[];

  constructor(private httpService: HttpService){}
  ngOnInit(){

    this.httpService.getItems().subscribe((data) =>  {
      this.items = data.filter((item:Item) => data.indexOf(item) <= 3);
      this.httpService.items = this.items;
    });
  }
}
