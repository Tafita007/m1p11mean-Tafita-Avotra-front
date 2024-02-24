import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { firstValueFrom } from 'rxjs';
import { RdvClient } from 'src/app/models/rdv-client.model';
import { RendezVousService } from 'src/app/service/rendez-vous.service';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-list-rdv',
  templateUrl: './list-rdv.component.html',
  styleUrls: ['./list-rdv.component.css']
})
export class ListRdvComponent implements OnInit {

  listRdv : RdvClient[] = [ ];
  route : ActivatedRoute | undefined;

  displayedColumnsRdv = ["datePrise", "dateRdv", "nomEmploye", "prixTotal", "details"];
  constructor(
    private router : Router,
    private rdvService : RendezVousService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if(token){
      const clientId = jwtHelper.decodeToken(token)?.clientId;

      // Récupérer la liste des rendez-vous
      firstValueFrom(this.rdvService?.getAllRdv(clientId))?.then((result : Object) => {
        // Attribuer la liste des rendez-vous dans le data-source du mat-table
        this.listRdv = result as RdvClient[];        
      })
    }
  }

  showDetails(rdv : RdvClient) {
    /**
      DESC : Afficher le dialogue du détail
     */
    this.dialog.open(DetailDialogComponent, {
      // Les données à envoyer dans le dialogComponent
      data : {
        service : rdv?.service
      },
    })
  }

}
