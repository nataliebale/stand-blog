import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { filter, map, Observable, shareReplay, tap } from "rxjs";
import { IBlog } from "../../../libs/components/card/entity/card.interface";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getBlogs$(): Observable<IBlog[]> {
    return this.http.get<any>(this.blogsUrl).pipe(
      map((data) => data?.posts),
      shareReplay(1)
    );
  }

  public getBlogById$(id: number): Observable<IBlog> {
    return this.http.get<any>(this.blogsUrl).pipe(
      map((data) => {
        let fr = data?.posts.filter((item: IBlog) => item.id === id);
        return fr.length ? fr[0] : null;
      })
    );
  }
}
