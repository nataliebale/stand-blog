import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { ICard } from "../../../libs/components/card/entity/card.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<ICard[]> {
    return this.http.get<any>(this.blogsUrl).pipe(
      map((data) => data?.categories)
    );
  }
}
