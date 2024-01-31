import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  collapsed = true; 
  
  isAuth() : boolean {
    if (localStorage.getItem("token")) return true
    else return false ;
  }

  isAuthLawyer() : boolean {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("type") === "lawyer") return true
      else return false ;
    }
    else return true ;
  }
  
  isAuthClient() : boolean {
    if (localStorage.getItem("token")) {
    if (localStorage.getItem("type") === "client") return true
      else return false ;
    }
    else return true ;
  }

  getProfile(){
    const token =localStorage.getItem("token");
    const type = localStorage.getItem("type");
    if(type === "client")
      this.router.navigate(["/profileClient"]) ;
    else 
      this.router.navigate(["/profileLawyer"]) ;
  }



  signout() : void {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
  }
 
}
