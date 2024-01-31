import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LawyerCasesService } from 'src/app/services/lawyer-cases.service';
import { LoginService } from 'src/app/services/login.service';
import { Case } from '../../../Model/case.model';

@Component({
  selector: 'app-lawyer-cases-list',
  templateUrl: './lawyer-cases-list.component.html',
  styleUrls: ['./lawyer-cases-list.component.scss'],
})
export class LawyerCasesListComponent implements OnInit {
  // colorencours = "deep-orange";
  // colordemand="white"
  // colorterm="white";
  etat = 'en cours';

  email = '';

  casesDemand: Case[] = [];
  casesProgress: Case[] = [];
  casesFinish: Case[] = [];

  pd: number = 1;
  pc: number = 1;
  pt: number = 1;
  itemsPerPage: number = 5;
  totalItems: any;

  searchText: string = '';

  constructor(
    private lawyerCasesService: LawyerCasesService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.verification();
    this.getLawyerEmail();
    this.lawyerCasesService.subscribeTo(
      'search',
      (data) => (this.searchText = data.value)
    );
    this.lawyerCasesService.subscribeTo(
      'status',
      (data) => (this.etat = data.value)
    );

    // this.lawyerCasesService.selectStatusSubject_.subscribe(
    //   etat => {this.etat = etat;
    //             console.log(this.etat)}
    // )
    console.log(this.etat);
  }

  getLawyerEmail() {
    this.loginService.getLawyer().subscribe((result: any) => {
      this.email = result.email;
      this.loadCasesProgress();
      this.loadCasesDemand();
      this.loadCasesFinish();
    });
  }

  // onShowEncours(){
  //   this.etat="en cours";
  //   this.colorencours = "deep-orange";
  //   this.colorterm="white";
  //   this.colordemand = "white";
  // }

  // onShowDemand(){
  //   this.etat="demande";
  //   this.colordemand = "deep-orange";
  //   this.colorterm="white";
  //   this.colorencours = "white";
  // }

  // onShowTermine(){
  //   this.etat="terminée";
  //   this.colorencours = "white";
  //   this.colordemand = "white";
  //   this.colorterm="deep-orange";
  // }

  sortDateCroiss(a: Case, b: Case): number {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  }

  loadCasesDemand() {
    //this.onShowDemand()
    if (!this.casesDemand.length) {
      this.lawyerCasesService
        .loadCasesDemand(this.email)
        .subscribe((result) => {
          console.log(result);
          this.casesDemand = result;
        });
    }
    //console.log(this.email);

    this.totalItems = this.casesDemand.length;
  }

  loadCasesProgress() {
    //this.onShowEncours();
    if (!this.casesProgress.length) {
      this.lawyerCasesService
        .loadCasesProgress(this.email)
        .subscribe((result) => {
          console.log(result)
          this.casesProgress = result;
          this.casesProgress.sort((a: Case, b: Case) =>
            this.sortDateCroiss(a, b)
          );
        });
    }
    this.totalItems = this.casesProgress.length;
  }

  loadCasesFinish() {
    //this.onShowTermine();
    if (!this.casesFinish.length) {
      this.lawyerCasesService
        .loadCasesFinish(this.email)
        .subscribe((result) => {
          this.casesFinish = result;
          this.casesFinish.sort((a: Case, b: Case) =>
            this.sortDateCroiss(a, b)
          );
        });
    }
    this.totalItems = this.casesFinish.length;
  }

  // onSearchTextEntered(searchValue: string){
  //   this.searchText = searchValue;
  // }
}
