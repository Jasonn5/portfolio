import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  timeline = [
    {
      year: 'Nov 2024 – Feb 2025',
      company: 'Nice CX-One',
      icon: 'assets/companies/nice.webp',
      title: 'Software Engineer In Test Intern',
      description: `Developed efficient TypeScript-based automated test cases. Refactored legacy tests for better maintainability. Reported critical bugs, enhancing system stability.`
    },
    {
      year: 'Jun 2024 – Oct 2024',
      company: 'Universidad Mayor de San Simón',
      icon: 'assets/companies/umss.webp',
      title: 'Laboratory Development Assistant',
      description: `Led intern dev team. Enhanced internal university systems using Angular, Spring Boot, and .NET. Conducted C# .NET training sessions.`
    },
    {
      year: 'Jul 2023 – May 2024',
      company: 'Spartan Soft',
      icon: 'assets/companies/spartan-soft.webp',
      title: 'Software Engineer',
      description: `Analyzed requirements, maintained systems, and deployed on Azure & AWS. Developed with Angular, .NET, NestJS, SQL Server, MySQL.`
    },
    {
      year: 'Nov 2022 – Jul 2023',
      company: 'Nice CX-One',
      icon: 'assets/companies/nice.webp',
      title: 'Software Engineer Trainee',
      description: `Built apps using Angular, .NET, and SQL Server. Implemented unit tests with XUnit. Fixed Veracode vulnerabilities and optimized CI/CD with Jenkins.`
    },
    {
      year: 'Jul 2021 – Oct 2022',
      company: 'Freelance',
      icon: 'assets/companies/freelance.webp',
      title: 'Full Stack Developer',
      description: `Collaborated closely with clients to design and deliver tailored web applications. Led end-to-end development using Angular, .NET, and SQL Server, ensuring responsive UIs, API integration, and long-term maintainability.`
    },    
    {
      year: 'Jul 2020 – Jun 2021',
      company: 'JabuSoft',
      icon: 'assets/companies/jabusoft.webp',
      title: 'Full Stack Developer',
      description: `Led full-stack development with Angular and .NET. Focused on clean code, performance improvements, and secure authentication with JWT.`
    },
    {
      year: 'Aug 2019 – Jun 2020',
      company: 'JabuSoft',
      icon: 'assets/companies/jabusoft.webp',
      title: 'Full Stack Developer Intern',
      description: `Collaborated on Angular Material and .NET projects. Improved stability through debugging and integration. Version control with GitLab.`
    }
  ];

}
