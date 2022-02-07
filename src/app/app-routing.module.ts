import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './main-screen/contact-us/contact-us.component';
import { CountriesComponent } from './main-screen/countries/countries.component';
import { Covid19GuidelinesComponent } from './main-screen/covid19-guidelines/covid19-guidelines.component';
import { DashboardComponent } from './main-screen/dashboard/dashboard.component';
import { FaqComponent } from './main-screen/faq/faq.component';
import { IndiaComponent } from './main-screen/india/india.component';

const routes: Routes = [
  {
    path:'', 
    component:DashboardComponent
  },
  {
    path:'dashboard', 
    component:DashboardComponent
  },
  {
    path:'countries',
    component:CountriesComponent
  },
  {
    path:'india',
    component:IndiaComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'covid19-guidelines',
    component:Covid19GuidelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
