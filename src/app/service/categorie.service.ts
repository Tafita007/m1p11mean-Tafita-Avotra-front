import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../class/categorie';
import { ConfigUrlService } from './util/config-url.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient,private configURLService: ConfigUrlService) {
  }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.configURLService.getApiUrl()+"/listeCategorie");
  }

  insertCategorie(categorie: any): Observable<any> {
    return this.http.post<any>(`${this.configURLService.getApiUrl()}/insertCategorie`, categorie);
  }

  updateCategorie(id: Number, categorie: any): Observable<any> {
    return this.http.put<any>(`${this.configURLService.getApiUrl()}/updateCategorie/${id}`, categorie);
  }
}
