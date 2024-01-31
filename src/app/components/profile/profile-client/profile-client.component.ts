import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { RatingModalComponent } from '../../rating-modal/rating-modal.component';
import { Client } from '../../../Model/client.model';
import { LoginService } from '../../../services/login.service';
import { LawyerCasesService } from '../../../services/lawyer-cases.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.scss'],
})
export class ProfileClientComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private modalService: MdbModalService,
    private loginService: LoginService,
    private lawyerCasesService: LawyerCasesService
  ) {}

  token: string | null = '';

  client!: Client;

  progressCases: any;
  cases: any;
  completeCases: any = null;

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.loginService.getClient().subscribe((result) => {
      this.client = result;
      this.displayCasesInProgress();
      this.displayCasesComplete();
      console.log(this.client);
      
    });
  }

  async setImage(event: any) {
    const fd = new FormData();
    const file = <File>event.target.files[0];
    fd.append('file', file, file.name);
    const jwt = localStorage.getItem('token');
    if (!jwt) {
      throw new Error('No token found in localStorage');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    this.http
      .post('http://localhost:3000/client/picture/', fd, { headers })
      .subscribe((result: any) => {
        this.client.image = result.image;
      });
  }

  /*async loadClientCases() {
    
    this.http.get("http://localhost:3000/appointment/appointments/"+this.client.email)
      .subscribe((result) => {
        this.cases=result;
    })
  }*/

  displayCasesInProgress() {
    this.lawyerCasesService
      .loadCasesProgressClient(this.client.email)
      .subscribe((result) => {
        this.progressCases = result;
      });
  }

  async displayCasesComplete() {
    this.lawyerCasesService
      .loadCasesFinishClient(this.client.email)
      .subscribe((result) => {
        this.completeCases = result;
        if (this.completeCases.length != 0)
          this.modalService.open(RatingModalComponent, {
            data: { cases: this.completeCases },
          });
      });
  }

  /*async getLawyerName(){
  this.http.get("http://localhost:3000/auth-lawyer/lawyerInfoByEmail/"+this.client.email)
  .subscribe((result) => {
  this.clientEmail=result;
  })
  }*/
}
