import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean;
  clientId: number=1; 

  constructor(private service: AuthserviceService, private router: Router) {
    this.isLoggedIn = this.service.isLoggedIn();
  }

  setClientId(newClientId: number) {
    this.clientId = newClientId;
  }

  ngOnInit(): void {
   
  
    this.isLoggedIn=this.service.isLoggedIn();
  }


  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['login']);
    
  }
}
