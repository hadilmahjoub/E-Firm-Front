import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit {
  @Input() title!: string;
  @Input() loginLink!: string;
  @Input() signupLink!: string;
  @Input() target!: string;

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm(loginForm: FormGroup) {
    this.target == 'client'
      ? this.loginService.loginClient(loginForm.value).subscribe(
          (result: any) => {
            localStorage.setItem('token', result.token);
            localStorage.setItem('type', 'client');
            this.router.navigate(['/']);
          },
          (error) => this.toastr.error('Verifiez vos données client')
        )
      : this.loginService.loginLawyer(loginForm.value).subscribe(
          (result: any) => {
            localStorage.setItem('token', result.token);
            localStorage.setItem('type', 'lawyer');
            this.router.navigate(['/']);
          },
          (error) => this.toastr.error('Verifiez vos données avocat')
        );
  }
}
