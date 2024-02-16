import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/class/service';
import { LesServicesService } from 'src/app/service/les-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: Service[] = [];

  constructor(private lesServicesService: LesServicesService) {}

  ngOnInit(): void {
    this.lesServicesService.getServices().subscribe(services => {
      this.services = services;
    });
  }

}
