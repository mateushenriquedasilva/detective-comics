import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Comic } from './comics.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  baseURL: string = `http://localhost:3000/comics`;

  constructor(private http: HttpClient, private matSnackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.matSnackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  // error backend
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  // find all comics
  findAllComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // find comic by id
  findComicById(id: string): Observable<Comic[]> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Comic[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // create comic
  createComic(comics: Comic): Observable<Comic> {
    return this.http.post<Comic>(this.baseURL, comics).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // update comic
  updateComic(id: string, comic: Comic): Observable<Comic> {
    const url = `${this.baseURL}/${id}`;
    return this.http.put<Comic>(url, comic).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // delete comic
  deleteComic(id: string): Observable<Comic> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Comic>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
