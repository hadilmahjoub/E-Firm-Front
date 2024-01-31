import { Component, OnInit } from '@angular/core';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  routes = APP_ROUTES;

  constructor() {}

  ngOnInit(): void {}
}
