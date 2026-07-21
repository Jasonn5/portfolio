import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  timeline = [
    {
      year: 'Aug 2025 – Current',
      company: 'NICE CXone',
      icon: 'assets/companies/nice.webp',
      title: 'Mid-Senior Software Engineer',
      description: `Migrated the Studio microfrontend from PrimeNG to Angular Material across 200+ components, and upgraded it from Angular 17 to 21 with zero production incidents. Built an MCP server exposing the internal component library to Claude via Amazon Bedrock, and developed AI Agents and Skills for PR reviews, Jira analysis, and unit test generation. Implemented WCAG 2.2 AA accessibility standards while collaborating daily in English with distributed teams across the US and India.`
    },
    {
      year: 'Jul 2023 – Jul 2025',
      company: 'Spartan Soft',
      icon: 'assets/companies/spartan-soft.webp',
      title: 'Mid-Senior Software Engineer',
      description: `Reduced sales reporting response time from ~10s to 1s through SQL query optimization and indexing. Built Full Stack enterprise solutions with Angular, .NET Core, and Spring Boot following Microservices, Clean Architecture, DDD, and CQRS. Deployed cloud-native apps on Azure and AWS with Docker, Kubernetes, Helm, and CI/CD. Integrated Redis and Kafka, and built 200+ automated tests with Playwright and pytest.`
    },
    {
      year: 'Jun 2024 – Dec 2024',
      company: 'Universidad Mayor de San Simón',
      icon: 'assets/companies/umss.webp',
      title: 'Software Engineering Lab Assistant',
      description: `Served as Frontend Technical Lead for a university project, leading 5+ developers by defining architecture, assigning tasks, and conducting code reviews. Established Git Flow and PR review practices across the lab. Designed and delivered C# and .NET workshops for students and external professionals.`
    },
    {
      year: 'Nov 2022 – Jul 2023',
      company: 'NICE CXone',
      icon: 'assets/companies/nice.webp',
      title: 'Software Engineering Intern',
      description: `Remediated critical and high-severity security vulnerabilities from Black Duck SCA and Veracode SAST using OWASP ESAPI secure coding practices. Designed and maintained CI/CD pipelines for microservices and microfrontends with Jenkins and Docker. Diagnosed production incidents during cloud migrations using AWS CloudWatch.`
    },
    {
      year: 'Aug 2021 – Oct 2022',
      company: 'Freelance',
      icon: 'assets/companies/freelance.webp',
      title: 'Full Stack Developer',
      description: `Built end-to-end Full Stack solutions managing software architecture, development, testing, and cloud deployments on Azure and AWS. Gathered business requirements and translated them into scalable technical solutions while working directly with clients throughout the full development lifecycle.`
    },
    {
      year: 'Aug 2019 – Jun 2021',
      company: 'JabuSoft',
      icon: 'assets/companies/jabusoft.webp',
      title: 'Full Stack Developer',
      description: `Developed multiple SaaS applications from the ground up for healthcare, sales, inventory, and restaurant businesses using Angular, .NET, and SQL Server. Implemented JWT authentication, role-based authorization, and automated testing. Maintained production apps and onboarded new developers.`
    }
  ];

}
