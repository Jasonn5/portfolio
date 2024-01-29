import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LetsTalkComponent } from './components/lets-talk/lets-talk.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'about', component: AboutMeComponent
      },
      {
        path: 'experience', component: ExperienceComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      },
      {
        path: 'skills', component: SkillsComponent

      },
      {
        path: 'lets-talk', component: LetsTalkComponent
      },
    ]
  },
  {
    path: '**', redirectTo: '/about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
