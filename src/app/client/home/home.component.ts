import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Service } from 'src/app/class/service';
import { LesServicesService } from 'src/app/service/les-services.service';
import { BasketDialogComponent } from './basket-dialog/basket-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: Service[] = [];
  basketService : Service[] = [];

  constructor(
    private lesServicesService: LesServicesService,
    public dialog : MatDialog,
    ) {}

  ngOnInit(): void {
    this.lesServicesService.getServices().subscribe(services => {
      this.services = services;
    });
  }

  addToBasket(service : Service){
    /**
      DESC : Ajouter une service dans le panier
     */
    this.basketService.push(service);
  }

  openBasket() {
    /**
      DESC : Ouvrir le dialogue du panier
     */
    this.dialog.open(BasketDialogComponent, {
      data : {
        services : this.basketService
      }
    }).afterClosed().subscribe((result: any) => {

      console.log(result?.services);
      
      this.basketService = [];
      this.basketService = result?.services;

      console.log(this.basketService);
      
    })
  }

}
