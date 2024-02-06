import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Skill } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

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
    { id: 1, title: "Java", icon: "https://www.manualweb.net/img/logos/java.png", category: { id: 1 } },
    { id: 2, title: "C#", icon: "https://miro.medium.com/v2/resize:fit:1400/1*_NVBTVdmjt3Qvq3CZOySXg.png", category: { id: 1 } },
    { id: 3, title: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png", category: { id: 1 } },
    { id: 4, title: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", category: { id: 1 } },
    /*Frameworks and Libraries*/
    { id: 5, title: "Angular 8+", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", category: { id: 2 } },
    { id: 6, title: ".Net", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png", category: { id: 2 } },
    { id: 7, title: "XUnit", icon: "https://avatars.githubusercontent.com/u/2092016?s=280&v=4", category: { id: 2 } },
    { id: 8, title: "NestJs", icon: "https://nestjs.com/img/logo-small.svg", category: { id: 2 } },
    { id: 9, title: "SpringBoot", icon: "https://notearena.com/wp-content/uploads/2023/03/spring-boot-480.png", category: { id: 2 } },
    { id: 10, title: "Angular Material", icon: "https://angular.io/generated/images/marketing/concept-icons/material.png", category: { id: 2 } },
    { id: 11, title: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png", category: { id: 2 } },
    { id: 12, title: "Nebular", icon: "https://akveo.github.io/nebular/assets/img/akveo-logo.png", category: { id: 2 } },
    { id: 18, title: "PrimeNG", icon: "https://www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png", category: { id: 2 } },
    /*Databases & Database Interaction*/
    { id: 13, title: "SQL Server", icon: "https://tribes.agency/wp-content/uploads/2023/10/ext-550.png", category: { id: 3 } },
    { id: 14, title: "MySQL", icon: "https://cdn.icon-icons.com/icons2/1381/PNG/512/mysqlworkbench_93532.png", category: { id: 3 } },
    { id: 15, title: "MongoDB", icon: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png", category: { id: 3 } },
    { id: 16, title: "LINQ", icon: "https://www.tutlane.com/images/categorylogo/linq.png", category: { id: 3 } },
    { id: 17, title: "Entity Framework", icon: "https://lamphub.com/assets/images/logo/entity.png", category: { id: 3 } },
    /*Version Control & Cloud Platforms*/
    { id: 19, title: "Git", icon: "https://victorroblesweb.es/wp-content/uploads/2018/04/git.png", category: { id: 4 } },
    { id: 20, title: "TFS", icon: "https://miro.medium.com/v2/resize:fit:580/1*L4sDek4hS63qvXV39DShYg.png", category: { id: 4 } },
    { id: 21, title: "GitHub", icon: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png", category: { id: 4 } },
    { id: 22, title: "GitLab", icon: "https://assets.stickpng.com/images/5847f997cef1014c0b5e48c1.png", category: { id: 4 } },
    { id: 23, title: "Azure", icon: "https://swimburger.net/media/ppnn3pcl/azure.png", category: { id: 4 } },
    { id: 24, title: "AWS S3", icon: "https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg", category: { id: 4 } },
    { id: 25, title: "AWS EC2", icon: "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/AWS-EC2.png/_jcr_content/renditions/cq5dam.web.1280.1280.png", category: { id: 4 } },
    /*Soft Skills*/
    { id: 26, title: "Teamwork", icon: "https://cdn-icons-png.flaticon.com/512/4474/4474452.png", category: { id: 5 } },
    { id: 27, title: "Emotional Intelligence", icon: "https://cdn-icons-png.flaticon.com/512/7283/7283596.png", category: { id: 5 } },
    { id: 28, title: "Critical Thinking", icon: "https://cdn-icons-png.flaticon.com/512/9631/9631082.png", category: { id: 5 } },
    { id: 29, title: "Time Management:", icon: "https://cdn-icons-png.flaticon.com/512/10109/10109874.png", category: { id: 5 } },
    { id: 30, title: "Flexibility", icon: "https://cdn-icons-png.flaticon.com/512/4471/4471955.png", category: { id: 5 } },
    { id: 31, title: "Customer Focus", icon: "https://cdn-icons-png.flaticon.com/512/10342/10342464.png", category: { id: 5 } },
    { id: 32, title: "Adaptability to Agile Methodologies", icon: "https://www.ibsolution.com/hubfs/Icons/IBsolution_Agility.png", category: { id: 5 } },
    /*Others*/
    { id: 33, title: "JWT", icon: "https://play-lh.googleusercontent.com/3C-hB-KWoyWzZjUnRsXUPu-bqB3HUHARMLjUe9OmPoHa6dQdtJNW30VrvwQ1m7Pln3A", category: { id: 6 } },
    { id: 34, title: "Google Maps API", icon: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/150/google-maps-512.png", category: { id: 6 } },
    { id: 35, title: "WhatsApp API", icon: "https://www.radicasys.com/wp-content/uploads/2022/02/whatsapp-16.png", category: { id: 6 } },
    { id: 36, title: "RESTful APIs", icon: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png", category: { id: 6 } },
    { id: 37, title: "RDS", icon: "https://static.us-east-1.prod.workshops.aws/public/58867f2e-f4bb-4684-9d8c-6b48f0c47b6a/static/images/Amazon-RDS.png", category: { id: 6 } },
  ];

  constructor() { }

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
