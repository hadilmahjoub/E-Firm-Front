import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-navbar-remade',
  templateUrl: './navbar-remade.component.html',
  styleUrls: ['./navbar-remade.component.scss'],
})
export class NavbarRemadeComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}
  routes = APP_ROUTES;
  visibility = false;
  collapsed = true;

  isAuth(): boolean {
    return this.loginService.isAuth();
  }

  isAuthLawyer(): boolean {
    return this.loginService.isAuthLawyer();
  }

  isAuthClient(): boolean {
    return this.loginService.isAuthClient();
  }

  getProfile() {
    const token = localStorage.getItem('token');
    const type = localStorage.getItem('type');
    if (type === 'client') this.router.navigate(['/profileClient']);
    else this.router.navigate(['/profileLawyer']);
  }

  signout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
  }

  show() {
    this.visibility = !this.visibility;
  }
}
