import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent implements OnInit {
  problem = {
    type: '',
    description: '',
  };

  public problemDescriptionForm = new FormGroup({
    type: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  isAuth(): boolean {
    if (localStorage.getItem('token')) return true;
    else return false;
  }

  isAuthClient(): boolean {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('type') === 'client') return true;
      else return false;
    } else return true;
  }

  ngOnInit(): void {
    // if (!this.isAuthClient()) {
    //   this.toastr.error('vous etes un avocat, il faut etre un client');
    //   this.router.navigate(['/']);
    // }
    if (!this.isAuth()) {
      this.toastr.error('vous devez etre connecter en tant que client');
      this.router.navigate([APP_ROUTES.login]);
    }
    this.problemDescriptionForm = this.formBuilder.group({
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  showLawyers = false;

  loadLawyers() {
    this.showLawyers = true;
  }
}
