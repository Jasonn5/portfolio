import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CATEGORY_MAP } from '../../../shared/constants/project-category-map';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss'
})
export class ProjectFilterComponent {
  @Input() selected: string[] = [];
  @Input() activeCategory: string = 'All';
  @Output() toggle = new EventEmitter<string>();

  categoryMap: Record<string, string[]> = {
    Frontend: ['Angular', 'React', 'SCSS', 'CSS', 'HTML', 'Bootstrap', 'TypeScript', 'RxJS'],
    Backend: ['Node.js', 'Express.js', 'C#', '.NET', '.NET Core', 'Java', 'Spring Boot', 'SQL Server', 'PostgreSQL', 'MySQL'],
    Testing: ['Pytest', 'Locust', 'XUnit', 'MsTest', 'Moq'],
    Fullstack: [
      'Angular', 'React', 'TypeScript', 'SCSS', 'CSS', 'RxJS', 'Bootstrap',
      'Node.js', 'Express.js', 'C#', '.NET', '.NET Core', 'Java', 'Spring Boot',
      'JWT', 'REST API', 'SQL Server', 'PostgreSQL', 'MySQL', 'AWS'
    ],
    All: [
      'Angular', 'React', 'TypeScript', 'JavaScript', 'SCSS', 'CSS', 'HTML', 'Bootstrap',
      'RxJS', 'JWT', 'REST API', 'AWS', 'Chart.js', 'AG-Grid', 'Nebular', 'EmailJS', 'reCAPTCHA',
      'Python', 'C#', 'Java', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'SQL Server',
      '.NET', '.NET Core', 'Spring Boot', 'Gradle', 'Pytest', 'Locust', 'Automation',
      'Layered Architecture', 'XUnit', 'Moq', 'MsTest', 'Education'
    ]
  };

  get filteredTechnologies(): string[] {
    return this.categoryMap[this.activeCategory];
  }
}
