import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public projects: Project[] = [];

  constructor(private portfolioServie: PortfolioService, public themeService: ThemeService) { }

  ngOnInit(): void {
    this.projects = this.portfolioServie.listProjects();
  }

}