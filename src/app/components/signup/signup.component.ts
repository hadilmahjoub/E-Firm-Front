import { Component, OnInit } from '@angular/core';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  routes = APP_ROUTES;

  constructor() {}

  ngOnInit(): void {}
}
