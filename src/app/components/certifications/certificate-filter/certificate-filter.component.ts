import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-certificate-filter',
  templateUrl: './certificate-filter.component.html',
  styleUrls: ['./certificate-filter.component.scss']
})
export class CertificateFilterComponent {
  @Input() selected: string[] = [];
  @Output() toggle = new EventEmitter<string>();

  categories = ['Work', 'Courses', 'Competitions', 'Instructor', 'Academic Degrees', 'Bootcamps'];

}

