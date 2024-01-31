import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../Model/client.model';
import { Lawyer } from '../Model/lawyer.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router:Router) { }

  loginLawyer(credentials: any) : Observable<any>{
    return this.http.post(environment.DOMAIN + '/lawyer-auth/signin' , credentials ,{withCredentials: true})
  }

  loginClient(credentials: any) : Observable<any>{
    return  this.http.post(environment.DOMAIN + '/client-auth/signin' , credentials ,{withCredentials: true})
  }

  verification(){
    
    if(!this.isAuth()) {
      this.toastr.error('you need to be logged in as a lawyer');
      this.router.navigate(['/loginLawyer']) ;
    }
    else if(!this.isAuthLawyer()) {
      this.toastr.error('you are a client you need to be logged in as a lawyer');
      this.router.navigate(['/']) ;
    }
  }

  isAuth() : boolean {
    const token = localStorage.getItem("token")
    return !!token ;
  }

  isAuthLawyer() : boolean {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("type") === "lawyer") return true
      else return false ;
    }
    else return false ;
  }

  isAuthClient() : boolean {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("type") === "client") return true
        else return false ;
      }
      else return false ;
  }

  getLawyer() : Observable<Lawyer> {
    const jwt=localStorage.getItem("token");
    if (!jwt) {
      throw new Error('No token found in localStorage');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<Lawyer>(environment.DOMAIN + '/lawyer/lawyerInfo/', { headers })
  }

  getClient() : Observable<Client> {
    const jwt=localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get<Client>(environment.DOMAIN + '/client/clientInfo/', { headers })
  }


}
