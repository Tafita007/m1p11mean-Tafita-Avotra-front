import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../class/service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LesServicesService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl+"/listeService");
  }
}
