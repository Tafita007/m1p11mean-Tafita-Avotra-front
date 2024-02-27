import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/service/auth.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {

  token: string | null = null;

  constructor(private authService: AuthService) { 
    this.token = this.authService.getToken();
  }

  ngOnInit(): void {
    console.log(this.token);
  }

  logout() {
    this.authService.logout();
    this.token = null;
  }

}
