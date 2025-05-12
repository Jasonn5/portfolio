import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolios/portfolio/portfolio.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificatesComponent } from './components/certifications/certificates/certificates.component';

const routes: Routes = [
  {component: AboutMeComponent, path: ''},
  {component: PortfolioComponent, path: 'porfolio'},
  {component: WorkExperienceComponent, path: 'work-experience'},
  {component: SkillsComponent, path: 'skills'},
  {component: CertificatesComponent, path: 'certifications'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
