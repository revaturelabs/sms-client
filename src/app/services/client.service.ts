import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ClientService {
  private clientURI: string = environment.baseApiUrl + environment.apiUrls.clients;

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

  public getAllClients() {
    return this.http.get(this.clientURI)
      .pipe(
        retry(3), // retry up to 3 times if call fails
        catchError(this.handleError) // then handle error
      );
  }

  public getClient(id: number) {
    return this.http.get(`${this.clientURI}/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}
