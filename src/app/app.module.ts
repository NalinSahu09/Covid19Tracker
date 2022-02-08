import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { DashboardComponent } from './main-screen/dashboard/dashboard.component';
import { CountriesComponent } from './main-screen/countries/countries.component';
import { IndiaComponent } from './main-screen/india/india.component';
import { FaqComponent } from './main-screen/faq/faq.component';
import { ContactUsComponent } from './main-screen/contact-us/contact-us.component';
import { Covid19GuidelinesComponent } from './main-screen/covid19-guidelines/covid19-guidelines.component';
import { HeaderComponent } from './other-screen/header/header.component';
import { BannerComponent } from './other-screen/banner/banner.component';
import { MenuComponent } from './other-screen/menu/menu.component';
import { YoutubeLinksComponent } from './other-screen/youtube-links/youtube-links.component';
import { FooterComponent } from './other-screen/footer/footer.component';

import { AccordionConfig, AccordionModule } from 'ngx-bootstrap/accordion'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    DashboardComponent,
    CountriesComponent,
    IndiaComponent,
    FaqComponent,
    ContactUsComponent,
    Covid19GuidelinesComponent,
    HeaderComponent,
    BannerComponent,
    MenuComponent,
    YoutubeLinksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
