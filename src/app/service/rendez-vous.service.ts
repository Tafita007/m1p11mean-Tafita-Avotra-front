import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private apiUrl: string;
  // private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAllRdv(idClient : string){
    /**
      DESC : Retourner tous les rendez-vous correspondant à un client
     */
    return this.http.get(this.apiUrl + '/listeRendezvousClients/'+ idClient);
  }

  getListEmploye(){
    /**
      DESC : Récupérer la liste des employés
     */
    return this.http.get(this.apiUrl+ '/listEmploye/')
  }

  validateRdv(body: any){
    /**
      DESC : Valider un rendez-vous
     */
    return this.http.post(this.apiUrl + '/take_appointment/', body)
  }
}
