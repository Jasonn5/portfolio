import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  selectedCategories: string[] = [];

  certifications = [
    //academic degrees    
    {
      title: 'Academic Diploma – UMSS',
      description: 'Official diploma certifying completion of my academic program in Systems Engineering at Universidad Mayor de San Simón (UMSS).',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/academic-dregrees/academic-diploma.pdf',
      categories: ['Academic Degrees']
    },
    {
      title: 'National Professional Title – Bolivia',
      description: 'Nationally recognized professional title issued by the Ministry of Education of Bolivia, granting full legal authority to practice as a Systems Engineer.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/academic-dregrees/national-professional-title.pdf',
      categories: ['Academic Degrees']
    },
    //work    
    {
      title: 'Software Developer - Spartan Soft',
      description: 'Official employment certificate from Spartan Soft for my role as Software Developer, where I led technical implementations, coordinated directly with clients to gather and refine requirements, and delivered scalable systems using .NET, SQL Server, MySQL, NestJS, and Angular. I also managed deployments on Azure and AWS.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/spartan-soft.pdf',
      categories: ['Work']
    },
    {
      title: 'C# Instructor Certificate',
      description: 'Certificate acknowledging my qualification to teach C# .NET, demonstrating advanced understanding of backend development and the ability to mentor others in structured learning environments.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/instructor/instructor.pdf',
      categories: ['Instructor']
    },
    {
      title: 'Software Development Lab Assistant - UMSS',
      description: 'Certificate issued by Universidad Mayor de San Simón for my role as Laboratory Development Assistant, where I contributed to internal systems maintenance, led development interns, and taught C# .NET classes using Angular, Spring Boot, and SQL-based technologies.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/umss.pdf',
      categories: ['Work']
    },
    {
      title: 'Software Development - Jabusoft',
      description: 'Certificate for my role as a full-time developer, where I built and maintained web systems using .NET and Angular, collaborated in GitLab-driven environments, and delivered stable software releases.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/jabusoft.pdf',
      categories: ['Work']
    },
    {
      title: 'Full Stack Web Development – Enyoi Bootcamp',
      description: 'Certificate of completion for a 240-hour intensive Full Stack Web Development Bootcamp by Enyoi. Focused on practical training in modern technologies including React for frontend and Node.js for backend.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/bootcamps/bootcamp-fullstack.pdf', 
      categories: ['Bootcamps']
    },
    {
      title: 'QA Software Testing - NICE CX One',
      description: 'Internship certificate recognizing my contributions as a Software Engineer in Test, where I developed automated test cases using TypeScript, refactored legacy test code, and improved QA pipelines for large-scale enterprise systems.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/nice-qa.pdf',
      categories: ['Work']
    },
    {
      title: 'Full Stack Developer - NICE CX One',
      description: 'Development internship where I worked on frontend and backend features using Angular, .NET, and SQL Server. Participated in refactoring, debugging, and deploying enterprise-grade solutions.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/nice-dev.pdf',
      categories: ['Work']
    },
    {
      title: 'Hackathon Participation',
      description: 'Took part in a university-level hackathon where I collaborated under pressure to develop a complete software prototype, showcasing fast problem-solving and teamwork skills.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/competitions/hackathon.pdf',
      categories: ['Competitions']
    },
    {
      title: 'Software Development Intern - Jabusoft',
      description: 'Internship experience as a full stack developer using .NET and Angular Material, contributing to feature development, bug fixing, and code integration within a collaborative team.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/jabusoft-intern.pdf',
      categories: ['Work']
    },
    //course
    {
      title: 'Career Essentials in Software Development',
      description: '🚀 Completed a full learning path from Microsoft and LinkedIn, endorsed by both platforms, covering essential software engineering fundamentals and career readiness.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/career-essentials-in-software-development-by-microsoft.webp',
      categories: ['Courses']
    },
    {
      title: 'Git Essential Training: The Basics',
      description: 'Mastered version control with Git, including commits, branches, merges, and collaboration workflows. 🏅 Also accredited for Continuing Professional Education (CPE) credits.',
      preview: 'assets/certificates/courses/git-essential-trainign-the-basics.webp',
      url: 'assets/certificates/courses/git-essential-trainign-the-basics.webp',
      categories: ['Courses']
    },
    {
      title: 'Building APIs in .NET (Diploma)',
      description: 'Developed RESTful APIs using ASP.NET Core with real-world scenarios. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-apis-net.pdf',
      categories: ['Courses']
    },
    {
      title: 'Azure DevOps Essentials (Diploma)',
      description: 'Explored CI/CD pipelines, repositories, and boards with Azure DevOps. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-azure-devops.pdf',
      categories: ['Courses']
    },
    {
      title: 'SOLID Principles in C# and .NET (Diploma)',
      description: 'Applied SOLID principles for writing maintainable, clean, and scalable C# code. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-solid-csharp-net.pdf',
      categories: ['Courses']
    },
    {
      title: 'Advanced ASP.NET Core: Unit Testing',
      description: 'Deepened expertise in writing reliable unit tests for enterprise-level .NET applications.',
      preview: 'assets/certificates/courses/advanced-aspnet-core-unit-testing.webp',
      url: 'assets/certificates/courses/advanced-aspnet-core-unit-testing.webp',
      categories: ['Courses']
    },
    {
      title: 'Learning NgRx',
      description: 'Built reactive Angular applications with NgRx for state management following Redux patterns.',
      preview: 'assets/certificates/courses/learning-ngrx.webp',
      url: 'assets/certificates/courses/learning-ngrx.webp',
      categories: ['Courses']
    },
    {
      title: 'Entity Framework in .NET (Diploma)',
      description: 'Explored data access and ORM techniques using Entity Framework Core. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-entity-framework.pdf',
      categories: ['Courses']
    },
    {
      title: 'Angular: Testing and Debugging',
      description: 'Practiced modern testing strategies and debugging techniques within Angular applications.',
      preview: 'assets/certificates/courses/angular-testing-and-debugging.webp',
      url: 'assets/certificates/courses/angular-testing-and-debugging.webp',
      categories: ['Courses']
    },
    {
      title: 'LINQ in C# (Diploma)',
      description: 'Used LINQ for querying data collections in efficient and expressive ways. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-linq.pdf',
      categories: ['Courses']
    },
    {
      title: 'Unit Testing with C# (Diploma)',
      description: 'Learned to test .NET applications using unit testing practices in C#. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-unit-testing-csharp.pdf',
      categories: ['Courses']
    },
    {
      title: 'C# OOP (Object-Oriented Programming) (Diploma)',
      description: 'Mastered object-oriented principles using C# to build scalable software. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-c-sharp-poo.pdf',
      categories: ['Courses']
    },
    {
      title: 'C# Essentials (Diploma)',
      description: 'Completed core C# training, laying the groundwork for .NET development. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-csharp.pdf',
      categories: ['Courses']
    },
    {
      title: 'C# Essential Training 2: Generics, Collections, and LINQ',
      description: 'Gained proficiency in C# generics, collections handling, and LINQ for efficient data querying.',
      preview: 'assets/certificates/courses/csharp-essential-training-2.webp',
      url: 'assets/certificates/courses/csharp-essential-training-2.webp',
      categories: ['Courses']
    },
    {
      title: 'C# Essential Training 1: Types and Control Flow',
      description: 'Understood core C# syntax, data types, and control structures for building solid applications.',
      preview: 'assets/certificates/courses/csharp-essential-training-1.webp',
      url: 'assets/certificates/courses/csharp-essential-training-1.webp',
      categories: ['Courses']
    },
    {
      title: '.NET Fundamentals (Diploma)',
      description: 'Built a strong understanding of the .NET ecosystem and its development model. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-fundamentos-net.pdf',
      categories: ['Courses']
    },
    {
      title: 'Ethical Hacking: SQL Injection',
      description: 'Learned to identify and exploit SQL injection vulnerabilities in web applications ethically.',
      preview: 'assets/certificates/courses/ethical-hacking-sql-injection.webp',
      url: 'assets/certificates/courses/ethical-hacking-sql-injection.webp',
      categories: ['Courses']
    },
    {
      title: 'Cybersecurity Awareness: Social Engineering',
      description: 'Gained critical awareness of social engineering tactics and cybersecurity fundamentals.',
      preview: 'assets/certificates/courses/cybersecurity-awareness-social-engineering.webp',
      url: 'assets/certificates/courses/cybersecurity-awareness-social-engineering.webp',
      categories: ['Courses']
    },
    {
      title: 'Java Programming (Academic Certificate)',
      description: 'Completed academic-level training in Java programming with official certification. 📄 Physical or scanned document attached.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/java.pdf',
      categories: ['Courses']
    },
    {
      title: 'Introduction to Career Skills in Software Development',
      description: 'Developed professional soft skills tailored for software developers, including teamwork and communication.',
      preview: 'assets/certificates/courses/Introduction-to-career-skills-in-software-development.webp',
      url: 'assets/certificates/courses/Introduction-to-career-skills-in-software-development.webp',
      categories: ['Courses']
    },
    {
      title: 'Programming Foundations: Beyond the Fundamentals',
      description: 'Expanded programming knowledge beyond basics, including advanced logic, data handling, and best practices.',
      preview: 'assets/certificates/courses/programing-fundations-beyond-the-fundamentals.webp',
      url: 'assets/certificates/courses/programing-fundations-beyond-the-fundamentals.webp',
      categories: ['Courses']
    },
    {
      title: 'Programming Foundations: Fundamentals',
      description: 'Developed foundational programming skills including variables, loops, conditionals, and functions.',
      preview: 'assets/certificates/courses/programing-fundations-fundamentals.webp',
      url: 'assets/certificates/courses/programing-fundations-fundamentals.webp',
      categories: ['Courses']
    },
    {
      title: 'Scrum: The Basics',
      description: '🧭 Explored Scrum fundamentals. Accredited by the PMI as part of a registered training activity.',
      preview: 'assets/certificates/courses/scrum-the-basics.webp',
      url: 'assets/certificates/courses/scrum-the-basics.webp',
      categories: ['Courses']
    },
    {
      title: 'Software Development Life Cycle (SDLC)',
      description: 'Understood key stages of the software development lifecycle, from planning to maintenance.',
      preview: 'assets/certificates/courses/sdlc.webp',
      url: 'assets/certificates/courses/sdlc.webp',
      categories: ['Courses']
    },
    {
      title: 'Basic Computing (Diploma)',
      description: 'Completed foundational computing training, covering basic digital literacy. 📄 Issued by Platzi as part of a structured learning path.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/courses/diploma-computacion-basica.pdf',
      categories: ['Courses']
    }
  ];

  selectedCert: { title: string, url: string } | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  openCert(url: string) {
    window.open(url, '_blank');
  }

  viewInline(cert: { title: string, url: string }) {
    this.selectedCert = cert;
  }

  toggleCategory(category: string) {
    this.selectedCategories = this.selectedCategories.includes(category)
      ? this.selectedCategories.filter(c => c !== category)
      : [...this.selectedCategories, category];
  }

  get filteredCerts() {
    if (this.selectedCategories.length === 0) return this.certifications;
    return this.certifications.filter(cert =>
      this.selectedCategories.every(cat => cert.categories.includes(cat))
    );
  }
}