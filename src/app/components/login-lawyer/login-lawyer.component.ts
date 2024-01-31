import { Component, OnInit } from '@angular/core';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-login-lawyer',
  templateUrl: './login-lawyer.component.html',
  styleUrls: ['./login-lawyer.component.scss'],
})
export class LoginLawyerComponent implements OnInit {
  routes = APP_ROUTES;

  constructor() {}

  ngOnInit(): void {}
}
