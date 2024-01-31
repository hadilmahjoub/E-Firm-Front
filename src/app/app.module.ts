import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarRemadeComponent } from './components/navbar-remade/navbar-remade.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupLawyerComponent } from './components/signup-lawyer/signup-lawyer.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';

import { ProblemComponent } from './components/problem/problem.component';
import { ProfileLawyerComponent } from './components/profile/profile-lawyer/profile-lawyer.component';
import { ProfileClientComponent } from './components/profile/profile-client/profile-client.component';
import { LawyerCasesComponent } from './components/lawyer-cases/lawyer-cases.component';
import { LawyerCasesListComponent } from './components/lawyer-cases/lawyer-cases-list/lawyer-cases-list.component';
import { LawyerTableComponent } from './components/lawyer-table/lawyer-table.component';
import { LoginLawyerComponent } from './components/login-lawyer/login-lawyer.component';
import { EspaceAvocatComponent } from './components/espace-avocat/espace-avocat.component';


import { SignupComponent } from './components/signup/signup.component';
import { RatingModalComponent } from './components/rating-modal/rating-modal.component';
import { SigninComponent } from './components/signin/signin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Scroll1Component } from './components/scrolls/scroll1/scroll1.component';
import { Scroll2Component } from './components/scrolls/scroll2/scroll2.component';
import { Scroll3Component } from './components/scrolls/scroll3/scroll3.component';
import { Scroll4Component } from './components/scrolls/scroll4/scroll4.component';
import { LawComponent } from './components/law/law.component';
import { HomeRemadeComponent } from './components/home-remade/home-remade.component';
import { SearchComponent } from './components/lawyer-cases/search/search.component';
import { LawyerCaseDemandComponent } from './components/lawyer-cases/lawyer-cases-list/lawyer-case-demand/lawyer-case-demand.component';
import { LawyerCaseProgressComponent } from './components/lawyer-cases/lawyer-cases-list/lawyer-case-progress/lawyer-case-progress.component';
import { LawyerCaseFinishComponent } from './components/lawyer-cases/lawyer-cases-list/lawyer-case-finish/lawyer-case-finish.component';
import { ModifModalComponent } from './components/lawyer-cases/lawyer-cases-list/lawyer-case-progress/modif-modal/modif-modal.component';
import { TodoComponent } from './components/lawyer-cases/lawyer-cases-list/lawyer-case-progress/modif-modal/todo/todo.component';
import { LawyerCaseComponent } from './components/lawyer-cases/lawyer-cases-list/lawyer-case/lawyer-case.component';
import { DefaultImagePipe } from './pipe/default-image.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FeatureCardComponent } from './components/home-remade/feature-card/feature-card.component';
import { HomeSectionComponent } from './components/home-remade/home-section/home-section.component';
import { HomeScreenComponent } from './components/home-remade/home-screen/home-screen.component';
import { SignPageComponent } from './components/sign-page/sign-page.component';
import { SigninFormComponent } from './components/signin/signin-form/signin-form.component';
import { ProfileTemplateComponent } from './components/profile/profile-template/profile-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupLawyerComponent,
    SignupClientComponent,
    ProblemComponent,
    ProfileLawyerComponent,
    ProfileClientComponent,
    LawyerCasesComponent,
    LawyerCasesListComponent,
    LawyerCaseComponent,
    LawyerTableComponent,
    LoginLawyerComponent,
    EspaceAvocatComponent,
    SignupComponent,
    RatingModalComponent,
    SigninComponent,
    Scroll1Component,
    Scroll2Component,
    Scroll3Component,
    Scroll4Component,
    LawComponent,
    HomeRemadeComponent,
    NavbarRemadeComponent,
    SearchComponent,
    LawyerCaseDemandComponent,
    LawyerCaseProgressComponent,
    LawyerCaseFinishComponent,
    ModifModalComponent,
    TodoComponent,
    DefaultImagePipe,
    FeatureCardComponent,
    HomeSectionComponent,
    HomeScreenComponent,
    SignPageComponent,
    SigninFormComponent,
    ProfileTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    ButtonsModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      // timeOut: 3000,
      preventDuplicates: true,
      // progressBar: true,
    }),
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
