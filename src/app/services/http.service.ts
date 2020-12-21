import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public get<T>(url: string, options: any = {}): Observable<T> {
    return this.httpClient.get<T>(url, options).pipe(
      map((res: any) => { return res;}),
      catchError(this.handleError)
    );
  }


  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      return Observable.throw(httpError.error.message);
    } else {
      return throwError(httpError);
    }
  };
}
