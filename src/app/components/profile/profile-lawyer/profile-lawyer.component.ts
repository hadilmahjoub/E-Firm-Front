import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lawyer } from 'src/app/Model/lawyer.model';
import { LoginService } from 'src/app/services/login.service';
import { LawyerCasesService } from 'src/app/services/lawyer-cases.service';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-profile-lawyer',
  templateUrl: './profile-lawyer.component.html',
  styleUrls: ['./profile-lawyer.component.scss'],
})
export class ProfileLawyerComponent implements OnInit {
  routes = APP_ROUTES;

  lawyer!: Lawyer;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private lawyerCasesService: LawyerCasesService
  ) {}

  token: string | null = '';
  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.loginService.getLawyer().subscribe((result) => {
      this.lawyer = result;
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
      .post('http://localhost:3000/lawyer/picture/', fd, { headers })
      .subscribe((result: any) => {
        this.lawyer.image = result.image;
      });
  }
}
