import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';
import { Skill } from '../models/skills';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  public categories: Category[] = [
    { id: 1, name: "Programming Languages" },
    { id: 2, name: "Frameworks and Libraries" },
    { id: 3, name: "Databases & Database Interaction" },
    { id: 4, name: "Version Control & Cloud Platforms" },
    { id: 5, name: "Soft Skills" },
    { id: 6, name: "Others" }
  ];

  public skills: Skill[] = [
    /*Programming Languages*/
    { id: 1, title: "Java", icon: "", category: { id: 1 } },
    { id: 2, title: "C#", icon: "", category: { id: 1 } },
    { id: 3, title: "TypeScript", icon: "", category: { id: 1 } },
    { id: 4, title: "JavaScript", icon: "", category: { id: 1 } },
    /*Frameworks and Libraries*/
    { id: 5, title: "Angular 8+", icon: "", category: { id: 2 } },
    { id: 6, title: ".Net", icon: "", category: { id: 2 } },
    { id: 8, title: "NestJs", icon: "", category: { id: 2 } },
    { id: 9, title: "SpringBoot", icon: "", category: { id: 2 } },
    { id: 10, title: "Angular Material", icon: "", category: { id: 2 } },
    { id: 11, title: "Bootstrap", icon: "", category: { id: 2 } },
    { id: 12, title: "Nebular", icon: "", category: { id: 2 } },
    /*Databases & Database Interaction*/
    { id: 13, title: "SQL Server", icon: "", category: { id: 3 } },
    { id: 14, title: "MySQL", icon: "", category: { id: 3 } },
    { id: 15, title: "MongoDB", icon: "", category: { id: 3 } },
    { id: 16, title: "LINQ", icon: "", category: { id: 3 } },
    { id: 17, title: "Entity Framework", icon: "", category: { id: 3 } },
    { id: 18, title: "Identity Framework", icon: "", category: { id: 3 } },
    /*Version Control & Cloud Platforms*/
    { id: 19, title: "Git", icon: "", category: { id: 4 } },
    { id: 20, title: "TFS", icon: "", category: { id: 4 } },
    { id: 21, title: "GitHub", icon: "", category: { id: 4 } },
    { id: 22, title: "GitLab", icon: "", category: { id: 4 } },
    { id: 23, title: "Azure", icon: "", category: { id: 4 } },
    { id: 24, title: "AWS S3", icon: "", category: { id: 4 } },
    { id: 25, title: "AWS EC2", icon: "", category: { id: 4 } },
    /*Soft Skills*/
    { id: 26, title: "Teamwork", icon: "", category: { id: 5 } },
    { id: 27, title: "Emotional Intelligence", icon: "", category: { id: 5 } },
    { id: 28, title: "Critical Thinking", icon: "", category: { id: 5 } },
    { id: 29, title: "Time Management:", icon: "", category: { id: 5 } },
    { id: 30, title: "Flexibility", icon: "", category: { id: 5 } },
    { id: 31, title: "Customer Focus", icon: "", category: { id: 5 } },
    { id: 32, title: "Adaptability to Agile Methodologies", icon: "", category: { id: 5 } },
    /*Others*/
    { id: 33, title: "JWT", icon: "", category: { id: 6 } },
    { id: 34, title: "Google Maps API", icon: "", category: { id: 6 } },
    { id: 35, title: "WhatsApp API", icon: "", category: { id: 6 } },
    { id: 36, title: "RESTful APIs", icon: "", category: { id: 6 } },
    { id: 37, title: "RDS", icon: "", category: { id: 6 } },
  ];

  public experience: Experience[] = [
    {
      time: "Agt 2019 - Agt 2020", role: "Full Stack Developer Intern", company: "Jabusoft", description: "Throughout my internship at JabuSoft, I actively contributed to software development by producing clean and efficient code aligned with project specifications. I honed my skills in troubleshooting, debugging, and enhancing existing software systems. Additionally, I gained valuable experience in integrating various software components and third-party programs. Rigorous testing was a fundamental part of my responsibilities, ensuring the identification and resolution of any issues within the software.",
      skills: [
        { id: 1 }, { id: 2 }, { id: 3 }
      ]
    },
    {
      time: "Agt 2020 - Jun 2021", role: "Full Stack Developer Jr.", company: "Jabusoft", description: "My primary focus was on crafting clean and efficient code in adherence to project specifications. I undertook the responsibility of troubleshooting, debugging, and enhancing existing software systems. A significant aspect of my role involved seamlessly integrating diverse software components and third-party solutions to bolster overall system functionality.",
      skills: [
        { id: 1 }, { id: 2 }
      ]
    },
    {
      time: "Nov 2022 - July 2023", role: "Full Stack Developer Trainee", company: "Nice CX One", description: "During my time as a Trainee at Nice CX-One, I immersed myself in a transformative software development journey. I focused on crafting high-quality, efficient code to meet project demands. Key areas of growth included adeptly integrating various software components and third-party programs, thorough software testing, debugging, and creating comprehensive Unit Tests.",
      skills: [
        { id: 1 }, { id: 2 }
      ]
    }
  ];

  listExperience() {
    return this.experience.map(experience => ({
      time: experience.time,
      company: experience.company,
      role: experience.role,
      description: experience.description,
      skills: this.getSkillsByIds(experience.skills.map(skill => skill.id))
    })).reverse();
  }

  getSkillsByIds(skillIds: number[]): Skill[] {
    return this.skills.filter(skill => skillIds.includes(skill.id));
  }

  getSkillsByCategoryId(categoryId: number): Skill[] {
    return this.skills.filter(skill => categoryId == skill.category?.id);
  }

  listAllSkills() {
    return this.categories.map(categories => ({
      id: categories.id,
      name: categories.name,
      skills: this.getSkillsByCategoryId(categories.id)
    }));
  }

}
