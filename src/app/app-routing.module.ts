import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { HeaderComponent } from './header/header.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { Incomedetails2Component } from './incomedetails2/incomedetails2.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoantrackerComponent } from './loantracker/loantracker.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
const routes: Routes = [
  {path:'register',pathMatch:'full', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'features',component:FeaturesComponent},
  {path:'IncomeDetails',component:IncomeDetailsComponent},
  {path:'incomedetails2',component:Incomedetails2Component},
  {path:'loandetails',component:LoanDetailsComponent},
  {path:'personaldetails',component:PersonalDetailsComponent},
  {path:'documentsupload',component:DocumentsUploadComponent},
  {path:'header',component:HeaderComponent},
  {path:'loantracker',component:LoantrackerComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'admin-user',component:AdminLoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
