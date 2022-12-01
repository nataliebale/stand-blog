import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { ICard } from "../../../libs/components/card/entity/card.interface";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getBlogs(): Observable<ICard[]> {
    return this.http.get<any>(this.blogsUrl).pipe(
      map((data) => data?.posts)
    );
  }
}
