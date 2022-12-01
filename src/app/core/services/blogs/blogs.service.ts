import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ICard } from "../../../libs/components/card/entity/card.interface";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogsUrl = 'api/data.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }
  public getJSON(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.blogsUrl).pipe(
      tap(data => console.log(11111, data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(() => errorMessage );
  }
}
