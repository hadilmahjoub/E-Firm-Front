import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

import { APP_ROUTES } from 'src/app/config/routes.config';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-home-remade',
  templateUrl: './home-remade.component.html',
  styleUrls: ['./home-remade.component.scss'],
})
export class HomeRemadeComponent implements OnInit {
  routes = APP_ROUTES;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    Aos.init();
  }

  isAuth(): boolean {
    return this.loginService.isAuth();
  }

  isAuthLawyer(): boolean {
    return this.loginService.isAuthLawyer();
  }

  isAuthClient(): boolean {
    return this.loginService.isAuthClient();
  }
}
