import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private token: string | null = null;

  constructor(private http: HttpClient,private router:Router) {
    this.token = localStorage.getItem('token');
  }

  getToken(): string | null {
    return this.token ;
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registration/0`, user);
  }

  login(credentials: any): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        map(response => {
          const token = response.token;
          if (token) {
            localStorage.setItem('token', token);
            this.token = token;
            return true;
          } else {
            return false;
          }
        }),
        catchError(error => {
          console.error('Erreur de connexion :', error);
          return of(false);
        })
      );
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token') ;
    this.router.navigate(['/services']);
  }

}
