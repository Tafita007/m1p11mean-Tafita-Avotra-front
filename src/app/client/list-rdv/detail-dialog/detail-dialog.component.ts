import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceRdv } from 'src/app/models/rdv-client.model';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class DetailDialogComponent implements OnInit {

  services : ServiceRdv[] = [];
  currentIndex = 0;
  constructor(
    // Data est le nom de l'attribut qui a été donner pour passer les données au dialogue
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DetailDialogComponent>
    ) {}

  ngOnInit(): void {
    // Récupérer les donénes
    if(this.data){
      console.log(this.data);
      this.services = this.data?.service;
    }
  }

  next(){
    /**
      DESC: action du bouton next
     */
    if(!(this.currentIndex + 1 >= this.services?.length)){
      this.currentIndex ++;
    }
  }

  prev(){
    /**
      DESC: action du bouton prev
     */
    if(!(this.currentIndex - 1 < 0)){
      this.currentIndex --
    }
  }

}
