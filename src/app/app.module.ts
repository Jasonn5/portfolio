import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavigationOptionsComponent } from './components/navigation-options/navigation-options.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LetsTalkComponent } from './components/lets-talk/lets-talk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment ';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    PortfolioComponent,
    CertificationsComponent,
    ContactMeComponent,
    AboutMeComponent,
    NavigationOptionsComponent,
    ExperienceComponent,
    LetsTalkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaV3Module,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
