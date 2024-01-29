import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
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
    HttpClientModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
