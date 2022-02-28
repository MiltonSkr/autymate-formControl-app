import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Control } from './model/control'
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // HttpClient API get() method => Fetch Controls list
  getControls(): Observable<Control> {
    return this.http.get<Control>(this.apiURL + '/controls')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API get() method => Fetch Control
  getControl(id: number): Observable<Control> {
    return this.http.get<Control>(this.apiURL + '/controls/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create Control
  createControl(Control: any): Observable<Control> {
    return this.http.post<Control>(this.apiURL + '/controls', JSON.stringify(Control), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Update Control
  updateControl(id: number, Control: any): Observable<Control> {
    return this.http.put<Control>(this.apiURL + '/controls/' + id, JSON.stringify(Control), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: number) {
    return this.http.delete<Control>(this.apiURL + '/controls/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
