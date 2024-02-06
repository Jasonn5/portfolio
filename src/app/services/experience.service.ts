import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';
import { Skill } from '../models/skills';
import { Category } from '../models/category';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  public experience: Experience[] = [
    {
      time: "Agt 2019 - Agt 2020", role: "Full Stack Developer Intern", company: "Jabusoft", description: "Throughout my internship at JabuSoft, I actively contributed to software development by producing clean and efficient code aligned with project specifications. I honed my skills in troubleshooting, debugging, and enhancing existing software systems. Additionally, I gained valuable experience in integrating various software components and third-party programs. Rigorous testing was a fundamental part of my responsibilities, ensuring the identification and resolution of any issues within the software.",
      skills: [
        { id: 5 }, { id: 6 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 16 }, { id: 17 }, { id: 19 }, { id: 25 }, { id: 33 }
      ]
    },
    {
      time: "Agt 2020 - Jun 2021", role: "Full Stack Developer Jr.", company: "Jabusoft", description: "My primary focus was on crafting clean and efficient code in adherence to project specifications. I undertook the responsibility of troubleshooting, debugging, and enhancing existing software systems. A significant aspect of my role involved seamlessly integrating diverse software components and third-party solutions to bolster overall system functionality.",
      skills: [
        { id: 5 }, { id: 6 }, { id: 10 }, { id: 11 }, { id: 13 }, { id: 16 }, { id: 17 }, { id: 19 }, { id: 33 }, { id: 34 }
      ]
    },
    {
      time: "Nov 2022 - July 2023", role: "Full Stack Developer Trainee", company: "Nice CX One", description: "During my time as a Trainee at Nice CX-One, I immersed myself in a transformative software development journey. I focused on crafting high-quality, efficient code to meet project demands. Key areas of growth included adeptly integrating various software components and third-party programs, thorough software testing, debugging, and creating comprehensive Unit Tests.",
      skills: [
        { id: 2 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 9 }, { id: 13 }, { id: 19 }, { id: 20 }, { id: 23 }, { id: 24 }, { id: 35 }
      ]
    }
  ];

  constructor(private skillService: SkillsService) { }

  listExperience() {
    return this.experience.map(experience => ({
      time: experience.time,
      company: experience.company,
      role: experience.role,
      description: experience.description,
      skills: this.skillService.getSkillsByIds(experience.skills.map(skill => skill.id))
    })).reverse();
  }



}
