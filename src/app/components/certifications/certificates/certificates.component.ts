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
    //work
    {
      title: 'QA Software Testing - NICE CX One',
      description: 'Internship certificate recognizing my contributions as a Software Engineer in Test, where I developed automated test cases using TypeScript, refactored legacy test code, and improved QA pipelines for large-scale enterprise systems.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/nice-qa.pdf',
      categories: ['Work']
    },
    {
      title: 'Software Development Lab Assistant - UMSS',
      description: 'Certificate issued by Universidad Mayor de San Simón for my role as Laboratory Development Assistant, where I contributed to internal systems maintenance, led development interns, and taught C# .NET classes using Angular, Spring Boot, and SQL-based technologies.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/umss.pdf',
      categories: ['Work']
    },
    //instructor
    {
      title: 'C# Instructor Certificate',
      description: 'Certificate acknowledging my qualification to teach C# .NET, demonstrating advanced understanding of backend development and the ability to mentor others in structured learning environments.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/instructor.pdf',
      categories: ['Instructor']
    },
    {
      title: 'Software Developer - Spartan Soft',
      description: 'Official employment certificate from Spartan Soft for my role as Software Developer, where I led technical implementations, coordinated directly with clients to gather and refine requirements, and delivered scalable systems using .NET, SQL Server, MySQL, NestJS, and Angular. I also managed deployments on Azure and AWS.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/spartan-soft.pdf',
      categories: ['Work']
    },    
    //course
    {
      title: 'Java Programming',
      description: 'Mastered Java fundamentals and OOP principles, laying a solid foundation for backend development.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/java.pdf',
      categories: ['Course']
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
      url: 'assets/certificates/hackathon.pdf',
      categories: ['Competition']
    },
    {
      title: 'Software Development Intern - Jabusoft',
      description: 'Internship experience as a full stack developer using .NET and Angular Material, contributing to feature development, bug fixing, and code integration within a collaborative team.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/jabusoft-intern.pdf',
      categories: ['Work']
    },
    {
      title: 'Software Development - Jabusoft',
      description: 'Certificate for my role as a full-time developer, where I built and maintained web systems using .NET and Angular, collaborated in GitLab-driven environments, and delivered stable software releases.',
      preview: 'assets/img/pdf.webp',
      url: 'assets/certificates/jabusoft.pdf',
      categories: ['Work']
    }
  ];

  selectedCert: { title: string, url: string } | null = null;

  constructor(private sanitizer: DomSanitizer) {}

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