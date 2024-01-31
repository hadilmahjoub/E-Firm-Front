import { Component, OnInit } from '@angular/core';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  routes = APP_ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
