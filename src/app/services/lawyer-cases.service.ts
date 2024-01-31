import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Case } from '../Model/case.model';


const CASE_DEMAND = "http://localhost:3000/appointment/demand/";
const CASE_PROGRESS = "http://localhost:3000/appointment/progress/";
const CASE_FINISH = "http://localhost:3000/appointment/complete/"

export type LawyerSubject = {
  event: "search" | "status";
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class LawyerCasesService {

  email: string = "";

  private selectSearchSubject = new Subject<LawyerSubject>();
  //selectSearchSubject$ = this.selectSearchSubject.asObservable()

  // private selectStatusSubject = new Subject<string>();
  // selectStatusSubject_ = this.selectSearchSubject.asObservable()
 
  constructor(private http: HttpClient, private router:Router, private toastr: ToastrService) { 
    
  }

  // verification(){
    
  //   if(!this.isAuth()) {
  //     this.toastr.error('you need to be logged in as a lawyer');
  //     this.router.navigate(['/loginLawyer']) ;
  //   }
  //   else if(!this.isAuthLawyer()) {
  //     this.toastr.error('you are a client you need to be logged in as a lawyer');
  //     this.router.navigate(['/']) ;
  //   }
  // }

  // isAuth() : boolean {
  //   if (localStorage.getItem("token")) return true
  //   else return false ;
  // }

  // isAuthLawyer() : boolean {
  //   if (localStorage.getItem("token")) {
  //     if (localStorage.getItem("type") === "lawyer") return true
  //     else return false ;
  //   }
  //   else return false ;
  // }

  // getLawyer() : Observable<Object> {
  //   const jwt=localStorage.getItem("token");
  //   return this.http.get(environment.DOMAIN + '/auth-lawyer/lawyerInfo/'+ jwt)

    
  // }

  loadCasesDemand(email: string) : Observable<Case[]> {
    return this.http.get<Case[]>(environment.DOMAIN + '/appointment/demand/' + email)
   
  }

  loadCasesProgress(email: string) : Observable<Case[]> {
    return this.http.get<Case[]>(environment.DOMAIN + '/appointment/progress/' + email)
   
  }

  loadCasesFinish(email: string) : Observable<Case[]> {
    return this.http.get<Case[]>(environment.DOMAIN + '/appointment/complete/' + email)
   
  }
  
  loadCasesProgressClient(email: string) : Observable<Case[]> {
    return this.http.get<Case[]>(environment.DOMAIN + '/appointment/progressClient/' + email)
   
  }

  loadCasesFinishClient(email: string) : Observable<Case[]> {
    return this.http.get<Case[]>(environment.DOMAIN + '/appointment/completeClient/' + email)
   
  }

  onSearchTextChanged(text: string){
    this.selectSearchSubject.next({
      event: "search",
      value: text
    });
  }

  subscribeTo(event: "search" | "status", cb: (data: LawyerSubject) => void){
    this.selectSearchSubject.subscribe(data => {
      if(data.event === event){
        cb(data);
      }
    })
  }

  StatusChanged(text: string){
    this.selectSearchSubject.next({
      event: "status",
      value: text
    })
    console.log("ss" + text)
  }
  
}
