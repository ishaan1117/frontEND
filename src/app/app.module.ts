import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { Incomedetails2Component } from './incomedetails2/incomedetails2.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FooterComponent } from './footer/footer.component';
import { LoantrackerComponent } from './loantracker/loantracker.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApplicationnComponent } from './applicationn/applicationn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    CalculatorComponent,
    AboutUsComponent,
    FeaturesComponent,
    DocumentsUploadComponent,
    IncomeDetailsComponent,
    Incomedetails2Component,
    LoanDetailsComponent,
    PersonalDetailsComponent,
    FooterComponent,
    LoantrackerComponent,
    LoginpageComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ApplicationnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
