import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, shareReplay } from "rxjs";
import { IBlog } from "../../../libs/components";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getBlogs$(): Observable<IBlog[]> {
    return this.http.get<any>(this.blogsUrl).pipe(
      map((data) => data?.blogs),
      shareReplay(1)
    );
  }

  public getBlogById$(id: number): Observable<IBlog> {
    return this.http.get<any>(this.blogsUrl).pipe(
      map((data) => {
        let res = data?.blogs.filter((item: IBlog) => item.id === id);
        return res.length ? res[0] : null;
      }),
      shareReplay(1)
    );
  }
}
