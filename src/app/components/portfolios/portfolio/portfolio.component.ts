import { Component } from '@angular/core';
import { Project } from '../../../models/projects';
import { CATEGORY_MAP } from '../../../shared/constants/project-category-map';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {
  categories: string[] = ['All', 'Frontend', 'Backend', 'Testing', 'Fullstack'];
  selectedCategory = 'All';
  selectedTechnologies: string[] = [];

  get filteredProjects(): Project[] {
    return this.filterByCategory(this.filterByTechnologies(this.allProjects));
  }

  toggleCategory(category: string) {
    this.selectedCategory = category;
    this.selectedTechnologies = []; 
  }

  toggleTechnology(tech: string) {
    this.selectedTechnologies = this.selectedTechnologies.includes(tech)
      ? this.selectedTechnologies.filter(t => t !== tech)
      : [...this.selectedTechnologies, tech];
  }

  filterByTechnologies(projects: Project[]): Project[] {
    if (this.selectedTechnologies.length === 0) return projects;
    return projects.filter(project =>
      this.selectedTechnologies.every(tech =>
        project.technologies.includes(tech)
      )
    );
  }

  filterByCategory(projects: Project[]): Project[] {
    if (this.selectedCategory === 'All') return projects;
    return projects.filter(project =>
      project.technologies.some(tech =>
        CATEGORY_MAP[this.selectedCategory].includes(tech)
      )
    );
  }

  allProjects: Project[] = [
    {
      title: "Real Estate QA Automation",
      description: "Developed a robust multi-layered test automation suite for a real estate advisor platform. Covered smoke, functional, regression, and stress tests using Pytest and Locust.",
      repoUrl: "https://github.com/Jasonn5/real-home-automation",
      technologies: ["Python", "Pytest", "Locust", "Automation", "Layered Architecture"]
    },
    {
      title: "Ecommerce Admin Dashboard",
      description: "Angular-based dashboard managing products, orders, accounting, and data visualization using charts and tables.",
      repoUrl: "https://github.com/Jasonn5/EcommerceRV_Admin",
      technologies: ["Angular", "TypeScript", "SCSS", "AWS", "Chart.js", "AG-Grid", "Nebular", "Bootstrap", "RxJS", "JWT"]
    },
    {
      title: "University Social Platform Backend",
      description: "Backend built with Spring Boot for handling university social platform logic, including posts and user management.",
      repoUrl: "https://github.com/Jasonn5/social-web-backend",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Gradle"]
    },
    {
      title: "Covid Diagnostic System Client",
      description: "Frontend for a medical system using machine learning to analyze X-ray images and diagnose COVID-19 probabilities.",
      repoUrl: "https://github.com/Jasonn5/diagnostic-systems-client",
      technologies: ["Angular", "TypeScript", "SCSS", "Bootstrap", "AWS", "RxJS", "JWT", "REST API"]
    },
    {
      title: "Kanban Task Manager Backend",
      description: "Node.js/Express backend for a Kanban board application. Implements user authentication, role-based authorization, and task state management connected to a MySQL database.",
      repoUrl: "https://github.com/Jasonn5/Enyoi-PFinal-Backend",
      technologies: ["Node.js", "Express.js", "JavaScript", "MySQL", "JWT"]
    },
    {
      title: "Fire Incident Reporting Client",
      description: "Frontend for reporting incidents to fire departments, with real-time chat, WhatsApp integration, and AWS S3 for uploading evidence.",
      repoUrl: "https://github.com/Jasonn5/Fire_Client",
      technologies: ["Angular", "TypeScript", "SCSS", "AWS", "Bootstrap", "RxJS", "JWT", "REST API"]
    },
    {
      title: "Hotel Booking Platform Frontend",
      description: "A React frontend for a hotel booking site allowing users to browse hotels, view room availability, and make payments using Stripe. Includes booking history and responsive design.",
      repoUrl: "https://github.com/Jasonn5/enyoi-mod3-front",
      technologies: ["React", "JavaScript", "CSS", "Stripe", "REST API"]
    },
    {
      title: "EspoCRM QA Automation",
      description: "Developed layered automated test suites for modules such as Calls, Emails, Meetings, and Tasks in EspoCRM. Implemented using Pytest for smoke, functional, and regression testing.",
      repoUrl: "https://github.com/Jasonn5/Qates",
      technologies: ["Python", "Pytest", "Automation"]
    },
    {
      title: "Dark & Light Portfolio v1",
      description: "Initial version of a personal portfolio built with Angular. Includes theme toggle (dark/light), a contact form with email service integration, and Google reCAPTCHA.",
      repoUrl: "https://github.com/Jasonn5/portfolio-v2",
      technologies: ["Angular", "TypeScript", "SCSS", "EmailJS", "reCAPTCHA", "RxJS"]
    },
    {
      title: "Fire Incident Reporting Server",
      description: "Backend for a fire emergency system with reporting, chat, application tracking, and user authentication. Layered architecture with SQL Server.",
      repoUrl: "https://github.com/Jasonn5/Fire_Server",
      technologies: ["C#", ".NET Core", "SQL Server"]
    },
    {
      title: "Classroom Booking Backend",
      description: "C#/.NET backend with stored procedures to manage classroom and room reservations, user roles, and availability.",
      repoUrl: "https://github.com/Jasonn5/michi-soft-backend",
      technologies: ["C#", ".NET Core", "SQL Server", "Stored Procedures"]
    },
    {
      title: "Covid Diagnostic System Server",
      description: "Backend for a medical platform handling patient history, appointments, and ML-based COVID-19 diagnostics.",
      repoUrl: "https://github.com/Jasonn5/diagnostic-system-server",
      technologies: ["C#", ".NET Core", "SQL Server", "Stored Procedures"]
    },
    {
      title: "University Social Platform Frontend",
      description: "Frontend for a university community site enabling posts, media uploads, comments, and access to institutional information.",
      repoUrl: "https://github.com/Jasonn5/social-web-frontend",
      technologies: ["Angular", "TypeScript", "SCSS", "Bootstrap", "RxJS", "JWT", "REST API"]
    },
    {
      title: "Classroom Booking Frontend",
      description: "Angular frontend for managing classroom and space reservations in educational institutions.",
      repoUrl: "https://github.com/Jasonn5/michi-front-end",
      technologies: ["Angular", "TypeScript", "SCSS", "Bootstrap", "RxJS", "JWT", "REST API"]
    },
    {
      title: "Kanban Task Manager Frontend",
      description: "A user-friendly React interface for a Kanban board. Allows users to visualize tasks by status (To Do, In Progress, Done), manage task cards, and interact with a clean layout.",
      repoUrl: "https://github.com/Jasonn5/Enyoi-PFinal-Frontend",
      technologies: ["React", "JavaScript", "CSS", "REST API"]
    },
    {
      title: "Learn C# Educational Repo",
      description: "Educational repository divided into branches by level (basic to intermediate) used for teaching C# and .NET Core at Universidad Mayor de San Simón.",
      repoUrl: "https://github.com/Jasonn5/learn-c-sharp",
      technologies: ["C#", ".NET Core", "Education"]
    },
    {
      title: "Unit Testing - Advanced with Moq",
      description: "Advanced XUnit testing using Moq for mocking dependencies. Covers exception assertions and deep mock configurations in a Library System context.",
      repoUrl: "https://github.com/Jasonn5/UnitTest_P3",
      technologies: ["XUnit", "C#", ".NET", "Moq"]
    },
    {
      title: "Unit Testing - Intermediate with XUnit",
      description: "Intermediate-level XUnit test suite for a Library Management System. Covers dependency injection, AAA structure, and advanced Theory/InlineData usage.",
      repoUrl: "https://github.com/Jasonn5/UnitTest_P2",
      technologies: ["XUnit", "C#", ".NET"]
    },
    {
      title: "Unit Testing - Basics with XUnit",
      description: "Introductory XUnit testing material using a calculator example. Demonstrates usage of asserts, Fact, Theory, InlineData, MemberData, and ClassData.",
      repoUrl: "https://github.com/Jasonn5/UnitTest_P1",
      technologies: ["XUnit", "C#", ".NET"]
    },
    {
      title: "Time Zone Unit Testing with MsTest",
      description: "Unit tests for a Time Zone Helper utility using MsTest. Handles date conversions, timezone differences, and formatting.",
      repoUrl: "https://github.com/Jasonn5/TimeZoneConvertionNice",
      technologies: ["MsTest", "C#", ".NET"]
    },
    {
      title: "Time Zone Helper Tool",
      description: "A tool to convert between time zones, calculate differences, and format datetime values. Designed for cross-region applications.",
      repoUrl: "https://github.com/Jasonn5/TimeZoneConversion",
      technologies: ["C#", ".NET"]
    },
    {
      title: "Labyrinth Puzzle Game",
      description: "Java-based implementation of the classic Labyrinth board game, featuring pathfinding and random generation.",
      repoUrl: "https://github.com/Jasonn5/ChallengeOne",
      technologies: ["Java"]
    },
    {
      title: "Pet Adoption Catalog",
      description: "A React-based website for pet adoption that consumes an external API to display available pets in a catalog format. Implemented filtering and clean UI for better usability.",
      repoUrl: "https://github.com/Jasonn5/delta-x-interview",
      technologies: ["React", "TypeScript", "CSS", "REST API"]
    },
    {
      title: "Java Basics and Challenges",
      description: "A collection of Java exercises ranging from basic to intermediate level covering loops, arrays, and classes.",
      repoUrl: "https://github.com/Jasonn5/JavaBasics",
      technologies: ["Java"]
    },
    {
      title: "Long Word Reverser",
      description: "A Java console app that reverses all words with five or more letters in a given sentence. Others remain unchanged.",
      repoUrl: "https://github.com/Jasonn5/JeysonErikValdiviaBernal_EvaluacionNICE02",
      technologies: ["Java"]
    },
    {
      title: "Battleship Web Game",
      description: "Web version of the popular Battleship game built with vanilla HTML, JavaScript, and CSS.",
      repoUrl: "https://github.com/Jasonn5/JeysonErikValdiviaBernal_EvaluacionNICE02",
      technologies: ["HTML", "JavaScript", "CSS"]
    }
  ];
}

