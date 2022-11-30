import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private _jsonURL = 'src/api/data.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
