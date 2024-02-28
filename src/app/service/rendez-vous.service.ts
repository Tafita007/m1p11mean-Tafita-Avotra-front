import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfigUrlService } from './util/config-url.service';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http: HttpClient,private configURLService: ConfigUrlService) {
  }

  getAllRdv(idClient : string){
    /**
      DESC : Retourner tous les rendez-vous correspondant à un client
     */
    return this.http.get(this.configURLService.getApiUrl() + '/listeRendezvousClients/'+ idClient);
  }

  getListEmploye(){
    /**
      DESC : Récupérer la liste des employés
     */
    return this.http.get(this.configURLService.getApiUrl()+ '/listEmploye/')
  }

  validateRdv(body: any){
    /**
      DESC : Valider un rendez-vous
     */
    return this.http.post(this.configURLService.getApiUrl() + '/take_appointment/', body)
  }
}
