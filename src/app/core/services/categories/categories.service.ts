import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, shareReplay } from "rxjs";
import { ICategory } from "../../../libs/components";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getCategories$(): Observable<ICategory[]> {
    return this.http.get<any>(this.blogsUrl).pipe(
      map((data) => data?.categories),
      shareReplay(1)
    );
  }
}
