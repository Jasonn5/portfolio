import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuOptionsComponent } from './components/menu-options/menu-options.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolios/portfolio/portfolio.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificatesComponent } from './components/certifications/certificates/certificates.component';
import { ProjectCardComponent } from './components/portfolios/project-card/project-card.component';
import { ProjectFilterComponent } from './components/portfolios/project-filter/project-filter.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { CertificateFilterComponent } from './components/certifications/certificate-filter/certificate-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuOptionsComponent,
    AboutMeComponent,
    PortfolioComponent,
    WorkExperienceComponent,
    SkillsComponent,
    CertificatesComponent,
    ProjectCardComponent,
    ProjectFilterComponent,
    SafeUrlPipe,
    CertificateFilterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
