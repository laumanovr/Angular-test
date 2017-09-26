import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class HttpService{

  public items: any[];

  constructor(private http: Http){ }

  getItems() : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }

}

























