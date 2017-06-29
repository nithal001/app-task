import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  public url: string = './data.json';
  constructor(private http: Http) { }
  getData(): Observable<any> {
     return this.http.get(this.url)
        .map((res: Response) => res.json());
  }
}
