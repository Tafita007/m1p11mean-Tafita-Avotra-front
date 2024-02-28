import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { firstValueFrom } from 'rxjs';
import { Service } from 'src/app/class/service';
import { ServiceToSend } from 'src/app/models/rdv-client.model';
import { RendezVousService } from 'src/app/service/rendez-vous.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-basket-dialog',
  templateUrl: './basket-dialog.component.html',
  styleUrls: ['./basket-dialog.component.css']
})
export class BasketDialogComponent implements OnInit, OnDestroy{

  takenServices : Service[] = [];

  dateRdv = new Date();
  listEmploye : any[] = [];
  selectedEmploye : any;

  displayedColumns = ['nom', 'duree', 'prix', 'action']

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BasketDialogComponent>,
    private rdvService : RendezVousService,
  ) { }
  ngOnDestroy(): void {
    this.dialogRef.close({
      services : this.takenServices
    })
  }

  ngOnInit(): void {
    // Récupérer la liste des services prises
    if(this.data){
      this.takenServices = this.data?.services
    }
    firstValueFrom(this.rdvService.getListEmploye()).then((result : Object) => {
      this.listEmploye = result as any[];
    })
  }

  removeService(index : number) {
    /**
      DESC : Supprimer l'élément séléctionné
     */
    // console.log("index =", index);
    
    // this.takenServices?.slice(index, 1)
    // console.log("takenServices = ",this.takenServices);
    this.takenServices=this.takenServices.filter((_, i)=> i !== index) 
  }

  someOfPrice(){
    /**
      DESC : La somme des prix
     */
    return this.takenServices.reduce((sum, obj) => sum + obj.prix, 0)
  }

  async validateBasket(){
    /**
      DESC : Valider l'achat
     */
    const employeId = this.selectedEmploye?._id;

    console.log("selectedEmployeid= ", this.selectedEmploye?._id);
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if(token){
      const clientId = jwtHelper.decodeToken(token)?.clientId;
      const date = this.dateRdv;

      
      const services = this.takenServices;

      const body = {
        idClient : clientId,
        idEmploye : employeId, 
        service : this.transFormServiceToServiceToSend(services), 
        // dateRdv :date
      }

      try {
        const result = await firstValueFrom(this.rdvService.validateRdv(body));
        Swal.fire({
          title: 'Rendez-vous placé',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        })
        this.dialogRef.close({
          services : this.takenServices
        })
      } catch (error) {
        console.error('Une erreur est survenue :', error);
      }
    }
  }

  transFormServiceToServiceToSend(listServices : Service[]) : ServiceToSend [] {
    /**
      DESC : Transformer une service en ServiceToSend
     */

    let toReturn : ServiceToSend[] = []
    for(let service of listServices){
      toReturn.push({
        idService : service?._id,
        nom : service?.nom,
        commission : service?.commission,
        duree : service?.duree
      })
    }

    return toReturn;
  }

}
