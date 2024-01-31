import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { EspaceAvocatComponent } from './components/espace-avocat/espace-avocat.component';
import { LawyerCasesComponent } from './components/lawyer-cases/lawyer-cases.component';
import { LoginLawyerComponent } from './components/login-lawyer/login-lawyer.component';
import { LoginComponent } from './components/login/login.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ProfileClientComponent } from './components/profile/profile-client/profile-client.component';
import { ProfileLawyerComponent } from './components/profile/profile-lawyer/profile-lawyer.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { SignupLawyerComponent } from './components/signup-lawyer/signup-lawyer.component';
import { SignupComponent } from './components/signup/signup.component';
import { Scroll1Component } from './components/scrolls/scroll1/scroll1.component';
import { Scroll2Component } from './components/scrolls/scroll2/scroll2.component';
import { Scroll3Component } from './components/scrolls/scroll3/scroll3.component';
import { Scroll4Component } from './components/scrolls/scroll4/scroll4.component';
import { HomeRemadeComponent } from './components/home-remade/home-remade.component';

import { APP_ROUTES } from './config/routes.config';

const routes: Routes = [
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: APP_ROUTES.loginLawyer, component: LoginLawyerComponent },
  { path: APP_ROUTES.signin, component: SigninComponent },
  { path: APP_ROUTES.signupLawyer, component: SignupLawyerComponent },
  { path: APP_ROUTES.signup, component: SignupComponent },
  { path: APP_ROUTES.signupClient, component: SignupClientComponent },
  { path: APP_ROUTES.problem, component: ProblemComponent },
  { path: APP_ROUTES.profileLawyer, component: ProfileLawyerComponent },
  { path: APP_ROUTES.profileClient, component: ProfileClientComponent },
  { path: APP_ROUTES.lawyerCases, component: LawyerCasesComponent },
  { path: APP_ROUTES.lawyerSpace, component: EspaceAvocatComponent },
  { path: APP_ROUTES.scroll1, component: Scroll1Component },
  { path: APP_ROUTES.scroll2, component: Scroll2Component },
  { path: APP_ROUTES.scroll3, component: Scroll3Component },
  { path: APP_ROUTES.scroll4, component: Scroll4Component },
  { path: '**', component: HomeRemadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
