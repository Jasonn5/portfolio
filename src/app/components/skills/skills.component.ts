import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    // Frameworks
    { name: 'Angular', icon: 'assets/skills/angular.webp' },
    { name: 'ReactJS', icon: 'assets/skills/reactjs.webp' },
    { name: 'NestJS', icon: 'assets/skills/nestjs.webp' },
    { name: 'Spring Boot', icon: 'assets/skills/springboot.webp' },
    { name: '.NET', icon: 'assets/skills/dotnet.webp' },
    { name: 'ExpressJs', icon: 'assets/skills/expressjs.webp' },
  
    // Lenguajes
    { name: 'HTML', icon: 'assets/skills/html.webp' },
    { name: 'JavaScript', icon: 'assets/skills/javascript.webp' },
    { name: 'TypeScript', icon: 'assets/skills/typescript.webp' },
    { name: 'Rxjs', icon: 'assets/skills/rxjs.webp' },
    { name: 'Sass', icon: 'assets/skills/sass.webp' },
    { name: 'Bootstrap', icon: 'assets/skills/bootstrap.webp' },
    { name: 'Python', icon: 'assets/skills/python.webp' },
    { name: 'Java', icon: 'assets/skills/java.webp' },
  
    // Bases de datos
    { name: 'MySQL', icon: 'assets/skills/mysql.webp' },
    { name: 'PostgreSQL', icon: 'assets/skills/postgresql.webp' },
    { name: 'SQL Server', icon: 'assets/skills/sqlserver.webp' },
  
    // Otros
    { name: 'xUnit', icon: 'assets/skills/xunit.webp' },
    { name: 'JUnit', icon: 'assets/skills/junit.webp' },
    { name: 'CI/CD', icon: 'assets/skills/cicd.webp' },
    { name: 'Jenkins', icon: 'assets/skills/jenkins.webp' },
    { name: 'Git', icon: 'assets/skills/git.webp' },
    { name: 'Playwright', icon: 'assets/skills/playwright.webp' },
    { name: 'AWS', icon: 'assets/skills/aws.webp' },
    { name: 'Azure', icon: 'assets/skills/azure.webp' },
    { name: 'Veracode', icon: 'assets/skills/veracode.webp' },
    { name: 'Scrum', icon: 'assets/skills/scrum.webp' }
  ];
}
