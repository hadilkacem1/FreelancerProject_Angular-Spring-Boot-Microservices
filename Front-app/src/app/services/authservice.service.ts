import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { freelancer } from '../model/freelancer.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl = 'http://localhost:8762/freelancer-service/freelancers';
  private __clientConnect= new Subject<void>();
  isConnected=false;

  constructor(private http: HttpClient,private router :Router) { }
 registerFreelancer(client: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, client);
  }

 
  loginFreelancer(client: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, client);
  }

  loginClient(client:freelancer){
    this.loginFreelancer(client).subscribe((data)=>{
      console.log(data)
      var decoded:any = jwt_decode(data.token);
 
      console.log(decoded);
      this.loginInClient(decoded.data)
      this.__clientConnect.next()
    })
  }
  get ClientConnect()
  {
    return this.__clientConnect
  }

  loginInClient(data:any){
    localStorage.setItem("idC",data.id)
    this.isConnected=true
    this.router.navigate(['/Offre']).then(()=>{
      window.location.reload()
    })
  }

  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  
  }
  
}
