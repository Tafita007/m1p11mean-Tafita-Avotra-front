import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../class/service';
import { environment } from 'src/environments/environment';
import { ConfigUrlService } from './util/config-url.service';

@Injectable({
  providedIn: 'root'
})
export class LesServicesService {

  constructor(private http: HttpClient,private configURLService: ConfigUrlService) {
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.configURLService.getApiUrl()+"/listeService");
  }

  insertService(service: any): Observable<any> {
    return this.http.post<any>(`${this.configURLService.getApiUrl()}/insertService`, service);
  }

  updateService(id: string, service: any): Observable<any> {
    return this.http.put<any>(`${this.configURLService.getApiUrl()}/updateService/${id}`, service);
  }
  
}
