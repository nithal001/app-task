import { Injectable } from '@angular/core';
import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {
  public url: string = 'assets/data.json';
  constructor(private http: Http) { }
  getData(): Observable<any> {
     return this.http.get(this.url)
        .map(res => res.json());
  }
}
