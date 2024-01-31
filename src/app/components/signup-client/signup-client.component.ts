import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { ToastrService } from 'ngx-toastr';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss'],
})
export class SignupClientComponent implements OnInit {
  routes = APP_ROUTES;

  public signupClientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    FamilyName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(
    private signupService: SignupService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signupClientForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        FamilyName: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(18)]],
        city: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(9)]],
        confirmPassword: ['', Validators.required],
        type: ['client'],
        image: [''],
      },
      { validator: this.ConfirmedValidator('password', 'confirmPassword') }
    );
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  submitForm(signupClientForm: FormGroup) {
    this.signupService.signupClient(signupClientForm.value).subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem('token', result.token);
        localStorage.setItem('type', 'client');
        this.router.navigate(['/']);
      },
      (erreur) => this.toastr.error('Verifiez vos données client')
    );
  }
}
