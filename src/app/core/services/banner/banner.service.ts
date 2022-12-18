import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { IBanner } from "../../../libs/components/banner/entity/banner.interface";

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private dataUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getBanner$(): Observable<IBanner> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((data) => data?.banner)
    );
  }
}
