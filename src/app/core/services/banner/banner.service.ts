import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, shareReplay } from "rxjs";
import { IBanner } from "../../../libs/components/banner/entity/banner.interface";
import { IAd } from "../../../libs/components/ads-block/entity/ad.interface";

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private dataUrl = 'api/data.json';

  constructor(private http: HttpClient) {}

  public getBanner$(): Observable<IBanner> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((data) => data?.banner),
      shareReplay(1)
    );
  }

  public getAd$(): Observable<IAd> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((data) => data?.ad),
      shareReplay(1)
    );
  }
}
