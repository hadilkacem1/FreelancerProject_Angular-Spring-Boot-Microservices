import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegistreComponent } from './registre/registre.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent,canActivate:[AuthGuardService]},
  { path: 'about', component: AboutComponent,canActivate:[AuthGuardService]},
  { path: 'registre', component: RegistreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
