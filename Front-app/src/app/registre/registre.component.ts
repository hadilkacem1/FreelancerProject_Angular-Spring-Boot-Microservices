import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { freelancer } from '../model/freelancer.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  freelancerData = new freelancer();
  constructor(private service: AuthserviceService, private router: Router) {}

  registerFreelancer() {
    // Vérification que tous les champs sont remplis
    if (!this.freelancerData.name || !this.freelancerData.family_name || !this.freelancerData.gender ||
        !this.freelancerData.mdp || !this.freelancerData.address || !this.freelancerData.email) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez remplir tous les champs du formulaire.',
        confirmButtonText: 'OK'
      });
      return; // Arrêtez l'exécution de la fonction s'il manque des champs
    }

    this.service.registerFreelancer(this.freelancerData).subscribe(
      response => {
        console.log('Response:', response);

        // Succès de l'enregistrement
        Swal.fire({
          icon: 'success',
          title: 'Enregistrement réussi!',
          text: 'Votre compte a été créé avec succès.',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
          
            this.router.navigate(['/home']);
          }
        });

      },
      error => {
        console.error('Error:', error);

        // Échec de l'enregistrement
        Swal.fire({
          icon: 'error',
          title: 'Erreur lors de l\'enregistrement',
          text: 'Une erreur s\'est produite lors de l\'enregistrement. Veuillez réessayer.',
          confirmButtonText: 'OK'
        });
      }
    );
  }
}
