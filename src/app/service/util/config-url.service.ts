import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigUrlService {

  // private apiUrl = environment.apiUrl;
  private apiUrl: string = "https://m1p11mean-tafita-avotra-back.onrender.com";

  getApiUrl(): string{
    return this.apiUrl;
  }
 
  constructor() { }
}
