import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { HttpService } from "./services/http.service";

@Component ({
  selector: 'my-app',
  template: `
<span>
    <img [src]="'/assets/images/' + itemId + '.png'" alt="">
    <p>ID: {{selectedItem.id}}</p>
    <p>TITLE: {{selectedItem.title}}</p>
    <p>BODY: {{selectedItem.body}}</p>
</span>
`,
})
export class AppDescription implements OnInit {

  public itemId: any;
  selectedItem: any;

  constructor(private route: ActivatedRoute, private http: HttpService){}

  ngOnInit() {

    this.itemId = this.route.snapshot.params['id'];
    const allItems = this.http.items || [];
    this.selectedItem  = allItems.filter(i => i.id === + this.itemId)[0];
    console.log(this.selectedItem);

  }

}
