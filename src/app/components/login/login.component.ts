import { Component, OnInit } from '@angular/core';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  routes = APP_ROUTES;

  // public loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor() {}

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  // submitForm(loginForm: FormGroup) {
  //   this.loginService.loginClient(loginForm.value).subscribe(
  //     (result: any) => {
  //       localStorage.setItem('token', result.token);
  //       localStorage.setItem('type', 'client');
  //       this.router.navigate(['/']);
  //     },
  //     (error) => this.toastr.error('Verifiez vos données')
  //   );
  // }
}
