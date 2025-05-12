import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    // Frameworks
    { name: 'Angular', icon: 'assets/skills/angular.png' },
    { name: 'ReactJS', icon: 'assets/skills/reactjs.png' },
    { name: 'NestJS', icon: 'assets/skills/nestjs.svg' },
    { name: 'Spring Boot', icon: 'assets/skills/springboot.webp' },
    { name: '.NET', icon: 'assets/skills/dotnet.png' },
  
    // Lenguajes
    { name: 'JavaScript', icon: 'assets/skills/javascript.png' },
    { name: 'TypeScript', icon: 'assets/skills/typescript.png' },
    { name: 'Python', icon: 'assets/skills/python.png' },
    { name: 'Java', icon: 'assets/skills/java.png' },
  
    // Bases de datos
    { name: 'MySQL', icon: 'assets/skills/mysql.png' },
    { name: 'PostgreSQL', icon: 'assets/skills/postgresql.png' },
    { name: 'SQL Server', icon: 'assets/skills/sqlserver.png' },
  
    // Otros
    { name: 'CI/CD', icon: 'assets/skills/cicd.png' },
    { name: 'Jenkins', icon: 'assets/skills/jenkins.png' },
    { name: 'JUnit', icon: 'assets/skills/junit.png' },
    { name: 'xUnit', icon: 'assets/skills/xunit.png' },
    { name: 'Git', icon: 'assets/skills/git.png' },
    { name: 'Playwright', icon: 'assets/skills/playwright.png' },
    { name: 'AWS', icon: 'assets/skills/aws.webp' },
    { name: 'Azure', icon: 'assets/skills/azure.png' },
    { name: 'Veracode', icon: 'assets/skills/veracode.png' },
    { name: 'Scrum', icon: 'assets/skills/scrum.png' }
  ];
}
