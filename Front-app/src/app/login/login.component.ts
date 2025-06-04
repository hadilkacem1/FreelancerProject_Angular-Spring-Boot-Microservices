import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  client = {
    email: '',
    mdp: ''
  };

  constructor(private authService: AuthserviceService, private router: Router) {}

  login() {
    this.authService.loginFreelancer(this.client).subscribe(
      response => {
        console.log('Réponse de l\'API :', response);
        if (response.token) {
          localStorage.setItem('myToken', response.token); // Sauvegarde du token
          this.router.navigate(['/home']);
        }
      },
      error => {
        console.error('Erreur lors de la requête :', error);
      }
    );
  }

  isLoggedIn(){
    let token = localStorage.getItem("myToken");
    return token ? true : false;
  }
}
