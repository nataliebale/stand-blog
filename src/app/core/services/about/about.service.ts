import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { IAbout } from "../../../features/about/entity/about.interface";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getAbout(): Observable<IAbout> {
    return this.http.get<any>(this.blogsUrl).pipe(
      tap((data) => console.log(1111, data?.about)),
      map((data) => data?.about)
    );
  }
}
