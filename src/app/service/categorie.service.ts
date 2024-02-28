import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../class/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl: string;
  // private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl+"/listeCategorie");
  }

  insertCategorie(categorie: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/insertCategorie`, categorie);
  }

  updateCategorie(id: Number, categorie: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateCategorie/${id}`, categorie);
  }
}
