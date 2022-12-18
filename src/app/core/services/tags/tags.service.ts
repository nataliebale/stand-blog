import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, shareReplay } from "rxjs";
import { IBlog } from "../../../libs/components";

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getTags$(): Observable<IBlog[]> {
    return this.http.get<any>(this.blogsUrl).pipe(
      map((data) => data?.tags),
      shareReplay(1)
    );
  }
}
