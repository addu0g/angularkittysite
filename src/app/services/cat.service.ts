import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Cat, Result} from '../models/cat';

@Injectable({ providedIn: 'root' })
export class CatService{
    private catUrl = 'https://catfact.ninja/facts'; 

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    constructor(private http: HttpClient) { }

    getCatFacts(): Observable<Result> {
        return this.http.get<Result>(this.catUrl)
               .pipe(
                    map((data:Result) => data as Result)
                    // tap(s => s.data),
                    // catchError(this.handleError<Cat[]>('getCatFacts', []))
        );
    }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
