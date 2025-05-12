import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(
    public themeService: ThemeService) { }
  pdfUrl = '../../../assets/resume/Jeyson-Valdivia-resume.pdf';
  openOrDownloadPDF() {
    const fileName = 'documento.pdf';
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = fileName;
    link.click();
  }
}
