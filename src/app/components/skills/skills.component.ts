import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Skill } from 'src/app/models/skills';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private experienceService: ExperienceService){}

  ngOnInit(): void {
    this.categories = this.experienceService.listAllSkills();
  }

}
