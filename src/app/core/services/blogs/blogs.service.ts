import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICard } from "../../../libs/components/card/entity/card.interface";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get<ICard[]>(this.blogsUrl);
  }
}
