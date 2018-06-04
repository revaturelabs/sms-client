import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Batch } from '../models/batch';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class BatchService {
  private batchURI: string = environment.baseApiUrl + environment.apiUrls.batches;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code (400 or 500 status)
      // The response body may contain clues as to what went wrong
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return _throw('Something went wrong - please try again');
  };

  public getCurrentBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.batchURI)
      .pipe(
        retry(3), // retry up to 3 times if call fails
        catchError((err) => this.handleError(err)) // then handle error
      );
  }

  public getBatch(id: number): Observable<Batch> {
    return this.http.get<Batch>(`${this.batchURI}/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}
