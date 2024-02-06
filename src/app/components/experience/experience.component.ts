import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experiences: Experience[] = []
  constructor(private experienceService: ExperienceService, public themeService: ThemeService) { }

  ngOnInit(): void {
    this.experiences = this.experienceService.listExperience();
  }

}
