import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/service/auth.service';

@Component({
  selector: 'app-header-employe',
  templateUrl: './header-employe.component.html',
  styleUrls: ['./header-employe.component.css']
})
export class HeaderEmployeComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }
  
  logout(): void {
    this.authService.logout();
  }

}
