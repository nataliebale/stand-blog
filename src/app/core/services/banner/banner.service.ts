import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { IAbout } from "../../../features/about/entity/about.interface";
import { Banner } from "../../../libs/components/banner/entity/banner.interface";

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private dataUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getBanner$(): Observable<Banner> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((data) => data?.banner)
    );
  }
}
